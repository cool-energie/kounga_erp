import type { PagedDataParams } from '@/composables/pagedFetching'
import { stringifyFilters, type Filter } from '@/types/data/Filter'
import { stringifySorts, type Sort } from '@/types/data/Sort'
import { ErrorException } from '@/types/Exception'
import axios from 'axios'
import type { EditUserModelValues } from '@/modules/security/viewModels/UserModel'

const endpoints = {
  getPage: (page: number, itemsPerPage: number, sorts: Array<Sort>, filters: Array<Filter>) =>
    `users/page?page=${page}&itemsPerPage=${itemsPerPage}&sorts=${stringifySorts(sorts)}&filters=${stringifyFilters(filters)}`,
  edit: 'users/edit',
}

export const usersApi = {
  async getPage(query: PagedDataParams) {
    const { data } = await axios.get(
      endpoints.getPage(query.page, query.itemsPerPage, query.sorts, query.filters),
    )
    return data
  },
  async edit(model: EditUserModelValues) {
    return await axios.post(endpoints.edit, model).catch(() => {
      throw new ErrorException()
    })
  },
}
