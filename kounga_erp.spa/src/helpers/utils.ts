export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const formatDate = (date: Date) => date.toLocaleDateString('fr-FR')
export const formatDateStr = (date: string) => new Date(date).toLocaleDateString('fr-FR')
