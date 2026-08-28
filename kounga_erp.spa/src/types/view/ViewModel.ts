import type { Filter } from '@/types/data/Filter'

export type ViewModel = {
  values: any
}

export type ViewModelValues = {}

export type FiltersModel = ViewModel & { filters: Array<Filter>; init: Function }
