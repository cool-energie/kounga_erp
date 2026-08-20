import {
  infoColor,
  noticeColor,
  warningColor,
  errorColor,
  errorIcon,
  warningIcon,
  noticeIcon,
  infoIcon,
} from '@/helpers/consts'

type ExceptionSeverity = 'hight' | 'medium' | 'low' | 'none'

export class Exception extends Error {
  severity: ExceptionSeverity
  color: string
  message: string
  icon: string

  constructor(
    severity: ExceptionSeverity,
    color: string,
    icon: string,
    message: string = 'Something went wrong !',
  ) {
    super(message)
    this.severity = severity
    this.color = color
    this.message = message
    this.icon = icon
  }
}

export class ErrorException extends Exception {
  constructor(message: string = 'Something went wrong !', icon: string = errorIcon) {
    super('hight', errorColor, icon, message)
  }
}

export class WarningException extends Exception {
  constructor(message: string, icon: string = warningIcon) {
    super('medium', warningColor, icon, message)
  }
}

export class NoticeException extends Exception {
  constructor(message: string, icon: string = noticeIcon) {
    super('low', noticeColor, icon, message)
  }
}

export class InformationalException extends Exception {
  constructor(message: string, icon: string = infoIcon) {
    super('none', infoColor, icon, message)
  }
}
