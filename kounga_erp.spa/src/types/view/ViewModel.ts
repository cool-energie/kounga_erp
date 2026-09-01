import { Filter } from '@/types/data/Filter'

export interface ViewModel {
  get values(): any
}

export interface EntityViewModel extends ViewModel {
  setValues(values: any): void
}

export class ViewModelBase implements ViewModel {
  get values() {
    return Object.fromEntries(Object.entries(this).map(([k, v]) => [k, v.value]))
  }
}

export class EntityViewModelBase extends ViewModelBase implements EntityViewModel {
  setValues(values: any) {
    Object.entries(values).forEach(([k, v]) => {
      this[k].value = v
    })
  }
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
