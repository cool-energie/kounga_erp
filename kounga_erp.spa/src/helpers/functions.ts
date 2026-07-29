export function setBearerToken(accessToken: string, refreshToken: string) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export function removeBearerToken() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function isConnected() {
  return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
}
