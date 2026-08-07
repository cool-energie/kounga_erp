import axios from 'axios'
import type { RegisterModelValues } from './viewModels/RegisterModel'

const endpoints = {
  login: 'account/login',
  register: 'account/register',
  refresh: 'account/refresh',
  logout: 'account/logout',
  confirmEmail: 'account/confirm-email',
}

export const accountApi = {
  async login(email: string, password: string) {
    const { data } = await axios.post(endpoints.login, { email, password })
    return data
  },
  async register(model: RegisterModelValues) {
    return await axios.post(endpoints.register, model)
  },
  async refresh(refreshToken: string) {
    const payload = await axios.post(endpoints.refresh, { refreshToken })
    return payload.data
  },
  async logout() {
    return await axios.post(endpoints.logout, {})
  },
  async confirmEmail(token: string, userId: string) {
    const payload = await axios.post(endpoints.confirmEmail, { token, userId })
    return payload.data
  },
}
