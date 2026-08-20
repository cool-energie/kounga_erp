export type ErrResultGravity = 'error' | 'warning' | 'info'
export type OkResult = { ok: true } | { ok: true; data: any | undefined }
export type ErrResult = { ok: false; errorMessage: string; errorGravity: ErrResultGravity }
export type MutationResult = OkResult | ErrResult
export function Ok(data?: any | undefined): MutationResult {
  return data ? { ok: true, data } : { ok: true }
}

export const Err = (
  errorMessage: string,
  errorGravity: ErrResultGravity = 'error',
): MutationResult => ({ ok: false, errorMessage, errorGravity })

/*export type ApiResult<T, E> = { ok: true; value: T } | { ok: false; error: E }

export type AsyncResult<T, E> = Promise<ApiResult<T, E>>

export const Ok = <T, E>(value: T): ApiResult<T, E> => ({ ok: true, value })
export const Err = <T, E>(error: E): ApiResult<T, E> => ({ ok: false, error })

type ServerErrorType = 'LOGIN_FAILED' | 'LOGIN_NOT_ALLOWED' | 'INTERNAL_ERROR'

export type ServerError = { type: ServerErrorType; message: string }

export function isServerError(obj: any): boolean {
  return (
    obj &&
    ['LOGIN_FAILED', 'LOGIN_NOT_ALLOWED', 'INTERNAL_ERROR'].includes(obj.type) &&
    typeof obj.message === 'string'
  )
}*/
