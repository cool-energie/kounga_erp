export type Field = {
  value: unknown
  rules?: Array<(v: unknown) => true | string>
}
