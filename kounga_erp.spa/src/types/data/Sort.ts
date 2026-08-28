type SortOrder = 'asc' | 'desc'

export const stringifySorts = (sorts: Array<Sort>): string => sorts.map(stringifySort).join(',')

export type Sort = { key: string; order: SortOrder }

export const stringifySort = (sort: Sort): string =>
  sort.order === 'asc' ? sort.key : `-${sort.key}`
