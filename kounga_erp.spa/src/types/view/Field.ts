export type Field = {
  value: string | Number | Boolean | undefined
  rules?: Array<(v: string) => true | string>
}
