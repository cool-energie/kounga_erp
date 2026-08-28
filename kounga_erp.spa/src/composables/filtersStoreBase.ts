import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { type FiltersModel } from '@/types/view/ViewModel'
import _ from 'lodash'
import type { Filter, FilterOp } from '@/types/data/Filter'

export const useFiltersStoreBase = (name: string, filtersModel: Ref<FiltersModel>) =>
  defineStore(name, () => {
    const filtersForm = ref()
    const _filtersModel = ref(_.cloneDeep(filtersModel))
    const prevOps = new Map<String, FilterOp>()

    filtersModel.value.filters.forEach((f) => prevOps.set(f.field, f.op))

    async function appyFilters() {
      await filtersForm.value.validate()
      if (!filtersForm.value.isValid) {
        //normalize()
        return false
      }
      filtersModel.value.filters.forEach((f) => {
        if ((f.op === 'bw' || f.op === 'in') && Array.isArray(f.value) && f.value.length < 2) {
          prevOps.set(f.field, f.op)
          f.op = 'eq'
        }
        if (Array.isArray(f.value) && f.value.length > 1 && f.op === 'eq') {
          f.op = prevOps.get(f.field)
          prevOps.set(f.field, 'eq')
        }
      })
      _filtersModel.value = _.cloneDeep(filtersModel.value)
      return true
    }

    function clearFilters() {
      filtersModel.value.init()
      _filtersModel.value.init()
    }

    function normalize() {
      filtersModel.value = _.cloneDeep(_filtersModel.value)
    }

    function removeFilter(filter: Filter) {
      _filtersModel.value.filters.forEach((f) => {
        if (f.field === filter.field) f.value = undefined
      })
      normalize()
    }

    const filters = computed(() => _filtersModel.value.filters)
    return {
      filtersForm,
      filtersModel,
      filters,
      appyFilters,
      clearFilters,
      normalize,
      removeFilter,
    }
  })
