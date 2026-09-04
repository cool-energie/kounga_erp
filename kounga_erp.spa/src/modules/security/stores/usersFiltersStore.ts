import { ref } from 'vue'
import { UsersFiltersModel } from '../viewModels/UsersFilterModel'
import { useFiltersStoreBase } from '@/composables/filtersStoreBase'

export const useUsersFiltersStore = useFiltersStoreBase(
  'usersFiltersStore',
  ref(new UsersFiltersModel()),
)
