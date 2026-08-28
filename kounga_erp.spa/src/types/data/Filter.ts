export type FilterOp = 'eq' | 'bw' | 'in' | 'gt' | 'gte' | 'lt' | 'lte' | 'like'

type FilterBaseDataType = String | Number | Date | undefined

export type FilterDataType = FilterBaseDataType | Array<FilterBaseDataType>

const stringifyFilter = (filter: Filter): String => {
  var str = `${filter.field}::${filter.op}`
  if (Array.isArray(filter.value))
    return `${str}::${filter.value.map(stringifyFilterValue).join(',')}`
  return `${str}::${stringifyFilterValue(filter.value)}`
}

function stringifyFilterValue(value: FilterBaseDataType): string {
  if (value instanceof Date) return value.toLocaleDateString()
  return String(value)
}

export const stringifyFilters = (filters: Array<Filter>) =>
  filters
    .filter((f) => !isFilterEmpty(f))
    .map(stringifyFilter)
    .join('~')

export function toFilterLabel(filter: Filter) {
  var formatedValue
  if (Array.isArray(filter.value)) formatedValue = filter.value.map(stringifyFilterValue)
  else formatedValue = stringifyFilterValue(filter.value)
  switch (filter.op) {
    case 'eq':
      if (!Array.isArray(formatedValue)) formatedValue = formatedValue[0]
      return `${filter.field} = ${formatedValue}`

    case 'bw':
      if (!Array.isArray(formatedValue)) return ''
      return `${formatedValue[0]} <= ${filter.field} < ${formatedValue[1]}`

    case 'in':
      if (!Array.isArray(formatedValue)) return ''
      return `${filter.field} in [${formatedValue.join(', ')}]`

    case 'gt':
      return `${filter.field} > ${formatedValue}`

    case 'gte':
      return `${filter.field} >= ${formatedValue}`

    case 'lt':
      return `${filter.field} < ${formatedValue}`

    case 'lte':
      return `${filter.field} <= ${formatedValue}`

    case 'like':
      return `${filter.field} contain ${formatedValue}`

    default:
      return ''
  }
}

export function isFilterEmpty(filter: Filter) {
  if (Array.isArray(filter.value)) return filter.value.length === 0
  return filter.value === '' || filter.value === undefined
}

/*export type Filter = {
  field: string
  op: FilterOp
  value: FilterDataType | undefined
  rules: Array<Function>
}*/

export class Filter {
  field: string
  op: FilterOp
  value: FilterDataType | undefined
  rules: Array<Function>

  constructor(
    field: string,
    op: FilterOp,
    value: FilterDataType | undefined,
    rules: Array<Function>,
  ) {
    this.field = field
    this.op = op
    this.value = value
    this.rules = rules
  }

  toString(): string {
    switch (this.op) {
      case 'eq':
        return `${this.field} = ${this.value}`

      case 'bw':
        if (!Array.isArray(this.value)) return ''
        return `${this.value[0]} <= ${this.field} < ${this.value[1]}`

      case 'in':
        if (!Array.isArray(this.value)) return ''
        return `${this.field} in [${this.value.join(', ')}]`

      case 'gt':
        return `${this.field} > ${this.value}`

      case 'gte':
        return `${this.field} >= ${this.value}`

      case 'lt':
        return `${this.field} < ${this.value}`

      case 'lte':
        return `${this.field} <= ${this.value}`

      case 'like':
        return `${this.field} contain ${this.value}`

      default:
        return ''
    }
  }
}
