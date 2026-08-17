import axios from 'axios'
import type { RegisterModelValues } from './viewModels/RegisterModel'
import type { LoginModelValues } from './viewModels/LoginModel'
import type { ResetPasswordRequestModelValues } from './viewModels/ResetPasswordRequestModel'
import type { PasswordResetModelValues } from './viewModels/PasswordResetModel'
import AccountNotFoundException from '@/modules/account/exceptions/AccountNotFoundException'
import EmailNotVerifiedException from './exceptions/EmailNotVerifiedException'
import { ErrorException, Exception, InformationalException } from '@/types/Exception'
import InvalidTokenException from './exceptions/InvalidTokenException'

const endpoints = {
  login: 'login',
  register: 'account/register',
  refresh: 'account/refresh',
  logout: 'account/logout',
  confirmEmail: 'account/confirm-email',
  sendResetPasswordRequest: 'forgotPassword',
  resetPassword: 'resetPassword',
}

export const accountApi = {
  async login(model: LoginModelValues) {
    const { data } = await axios
      .post(endpoints.login, {
        email: model.Email,
        password: model.Password,
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data) {
            console.log('error.response.data')
            console.log(error.response.data.detail)
            var detail = error.response.data.detail
            if (detail === 'Failed') throw new AccountNotFoundException()
            if (detail === 'NotAllowed') throw new EmailNotVerifiedException()
          }
        }

        throw new ErrorException()
      })
    return data
  },
  async register(model: RegisterModelValues) {
    return await axios.post(endpoints.register, model).catch(() => {
      throw new ErrorException()
    })
  },
  async refresh(refreshToken: string) {
    let data
    await axios
      .post(endpoints.refresh, { refreshToken })
      .then((response) => (data = response.data))
      .catch((error) => {
        const response = error.response
        if (Array.isArray(response)) {
          response.forEach((err) => {
            if (err.code === 'InvalidToken') throw new InvalidTokenException()
            else throw new ErrorException()
          })
        }
      })
    return data
  },
  async logout() {
    return await axios.post(endpoints.logout, {}).catch(() => {
      throw new ErrorException()
    })
  },
  async confirmEmail(token: string, userId: string) {
    const { data } = await axios.post(endpoints.confirmEmail, { token, userId }).catch((error) => {
      const data = error.response.data
      if (Array.isArray(data)) {
        data.forEach((err) => {
          if (err.code === 'InvalidToken') throw new InvalidTokenException()
        })
      }
      throw new ErrorException()
    })

    return data
  },
  async sendResetPasswordRequest(model: ResetPasswordRequestModelValues) {
    return await axios.post(endpoints.sendResetPasswordRequest, { email: model.Email })
  },
  async resetPassword(model: PasswordResetModelValues) {
    return await axios.post(endpoints.resetPassword, {
      email: model.Email,
      resetCode: model.ResetCode,
      newPassword: model.NewPassword,
    })
  },
}
