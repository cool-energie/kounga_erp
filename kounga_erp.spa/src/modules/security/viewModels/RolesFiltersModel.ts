import { Filter } from '@/types/data/Filter'
import { FiltersModel } from '@/types/view/ViewModel'

export class RolesFiltersModel extends FiltersModel {
  Name: Filter
  isActive: Filter

  constructor() {
    super()
    this.init()
  }

  init() {
    this.Name = new Filter('name', 'like', undefined, [])
    this.isActive = new Filter('isActive', 'eq', undefined, [])
  }
}
