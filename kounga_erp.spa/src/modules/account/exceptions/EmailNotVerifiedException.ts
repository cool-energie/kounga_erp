import { WarningException } from '@/types/Exception'

export default class EmailNotVerifiedException extends WarningException {
  constructor(message: string = 'Your email is not verified') {
    super(message)
  }
}
