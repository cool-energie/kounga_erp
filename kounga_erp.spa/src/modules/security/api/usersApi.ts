import type { PagedDataParams } from '@/composables/pagedFetching'
import { stringifyFilters, type Filter } from '@/types/data/Filter'
import { stringifySorts, type Sort } from '@/types/data/Sort'
import axios from 'axios'

const endpoints = {
  getPage: (page: number, itemsPerPage: number, sorts: Array<Sort>, filters: Array<Filter>) =>
    `users/page?page=${page}&itemsPerPage=${itemsPerPage}&sorts=${stringifySorts(sorts)}&filters=${stringifyFilters(filters)}`,
}

export const usersApi = {
  async getPage(query: PagedDataParams) {
    const { data } = await axios.get(
      endpoints.getPage(query.page, query.itemsPerPage, query.sorts, query.filters),
    )
    return data
  },
}
