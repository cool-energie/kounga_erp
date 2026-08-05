import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify.ts'

import 'unfonts.css'
import axios from 'axios'
import { removeBearerToken, setBearerToken } from './helpers/functions.ts'
import { accountApi } from './modules/account/accountApi.ts'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    } else {
      delete config.headers['Authorization']
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Interceptor to handle 401 responses and refresh the token
axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    console.log(error)
    if (
      router.currentRoute.value.name != 'account.login' &&
      error.response &&
      error.response.status === 401
    ) {
      const refreshToken = localStorage.getItem('refreshToken')
      if (refreshToken) {
        try {
          localStorage.removeItem('refreshToken')
          const { newAccessToken, newRefreshToken } = await accountApi.refresh(refreshToken)
          setBearerToken(newAccessToken, newRefreshToken)
          // Retry the original request with the new token
          const originalRequest = error.config
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          return axios(originalRequest)
        } catch (exception) {
          // If refreshing fails, redirect to login or handle accordingly
          console.error('Failed to refresh token. Redirecting to login.')
          // Optionally, you can clear tokens and redirect to login page
          removeBearerToken()
          window.location.href = '/account/login' // Adjust the path as needed
        }
      } else {
        // No refresh token available, redirect to login or handle accordingly
        console.error('No refresh token available. Redirecting to login.')
        window.location.href = '/account/login' // Adjust the path as needed
      }
    }
    return Promise.reject(error)
  },
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
