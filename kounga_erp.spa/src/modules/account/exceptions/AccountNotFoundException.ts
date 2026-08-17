import { ErrorException } from '@/types/Exception'

export default class AccountNotFoundException extends ErrorException {
  constructor(message: string = 'Incorrect email and/or password') {
    super(message)
  }
}
