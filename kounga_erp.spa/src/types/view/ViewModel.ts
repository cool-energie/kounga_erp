import { Filter } from '@/types/data/Filter'

export interface ViewModel {
  get values(): any
}

export class ViewModelBase implements ViewModel {
  get values() {
    return Object.fromEntries(Object.entries(this).map(([k, v]) => [k, v.value]))
  }
}

export function setModelvalues(model: ViewModel, values: any) {
  //console.log('setModelvalues', model, values)
  Object.entries(values).forEach(([k, v]) => {
    if (k in model) {
      model[k].value = values[k]
    }
  })
  //console.log('setModelvalues end', model, values)
}

//export type FiltersModel = ViewModelBase & { filters: Array<Filter>; init: Function }

export abstract class FiltersModel extends ViewModelBase {
  get filters(): Array<Filter> {
    return Object.entries(this)
      .filter(([k, v]) => v instanceof Filter)
      .map(([k, v]) => v as Filter)
  }
  abstract init(): void
}
