import { ref } from 'vue'
import { useFiltersStoreBase } from '@/composables/filtersStoreBase'
import { RolesFiltersModel } from '../viewModels/RolesFiltersModel'

export const useRolesFiltersStore = useFiltersStoreBase(
  'rolesFiltersStore',
  ref(new RolesFiltersModel()),
)
