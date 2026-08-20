export default class ViewMessageModel {
  color: string
  prependIcon: string
  text: string
  title: string
  showed: boolean = false
  promise: Promise<void> | undefined

  constructor(
    color: string,
    prependIcon: string,
    text: string,
    title: '',
    promise: Promise<void> | undefined = undefined,
  ) {
    this.color = color
    this.prependIcon = prependIcon
    this.text = text
    this.title = title
    this.promise = promise
  }
}
