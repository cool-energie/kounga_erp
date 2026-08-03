import axios from 'axios'

const endpoints = {
  login: 'login',
  register: 'register',
  refresh: 'refresh',
  logout: 'logout',
}

export const authApi = {
  async login(email: string, password: string) {
    const { data } = await axios.post(endpoints.login, { email, password })
    return data
  },
  async register(email: string, password: string) {
    return await axios.post(endpoints.register, { email, password })
  },
  async refresh(refreshToken: string) {
    const payload = await axios.post(endpoints.refresh, { refreshToken })
    return payload.data
  },
  async logout() {
    return await axios.post(endpoints.logout, {})
  },
}
