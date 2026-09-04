import { isFilterEmpty, type Filter } from '@/types/data/Filter'
import type { Sort } from '@/types/data/Sort'
import { useQuery } from '@pinia/colada'
import { computed, ref } from 'vue'

export type PagedDataParams = {
  page: number
  itemsPerPage: number
  sorts: Array<Sort>
  filters: Array<Filter>
}
export type PagedDataResponse<T> = { Items: Array<T>; Total: number }

export function usePagedFetching(key, filtersStore, loader) {
  const filters = computed(() => filtersStore.filters.filter((f) => !isFilterEmpty(f)))
  const params = ref({ page: 1, itemsPerPage: 15, sorts: [], filters: filters })

  const { data, isLoading, refresh, refetch } = useQuery({
    key: () => [
      key,
      'page',
      params.value.page,
      params.value.itemsPerPage,
      ,
      params.value.sorts,
      params.value.filters,
    ],
    query: () => loader(params.value),
  })

  return {
    data,
    isLoading,
    params,
    refresh,
    refetch,
  }
}
