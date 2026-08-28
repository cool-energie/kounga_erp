import { ref } from 'vue'
import { UsersFiltersModel } from '../viewModels/UsersFilterModel'
import _ from 'lodash'
import { useFiltersStoreBase } from '@/composables/filtersStoreBase'

export const useUsersFiltersStore = useFiltersStoreBase(
  'usersFiltersStore',
  ref(new UsersFiltersModel()),
)
