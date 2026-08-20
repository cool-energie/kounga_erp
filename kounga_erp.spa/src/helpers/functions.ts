import type { BearerToken } from '@/types/BearerToken'

export function setBearerToken(bearerToken: BearerToken) {
  localStorage.setItem('accessToken', bearerToken.accessToken)
  localStorage.setItem('refreshToken', bearerToken.refreshToken)
}

export function removeBearerToken() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function isConnected() {
  return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
}
