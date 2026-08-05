export type Field = {
  value: string
  rules?: Array<(v: string) => true | string>
}
