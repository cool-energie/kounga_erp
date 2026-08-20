import { ErrorException } from '@/types/Exception'

export default class InvalidTokenException extends ErrorException {
  constructor(
    message: string = 'Token is invalid probably expired. Please request new token and confirm within 30 minutes.',
  ) {
    super(message)
  }
}
