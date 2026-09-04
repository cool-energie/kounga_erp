import type { PagedDataParams } from '@/composables/pagedFetching'
import { Filter, stringifyFilters } from '@/types/data/Filter'
import { stringifySorts, type Sort } from '@/types/data/Sort'
import { ErrorException } from '@/types/Exception'
import axios from 'axios'

const endpoints = {
  getPage: (page: number, itemsPerPage: number, sorts: Array<Sort>, filters: Array<Filter>) =>
    `roles/page?page=${page}&itemsPerPage=${itemsPerPage}&sorts=${stringifySorts(sorts)}&filters=${stringifyFilters(filters)}`,
  edit: 'roles',
  create: 'roles',
  delete: (id: Number | undefined) => `roles/${id}`,
}
export const rolesApi = {
  async getPage(query: PagedDataParams) {
    const { data } = await axios.get(
      endpoints.getPage(query.page, query.itemsPerPage, query.sorts, query.filters),
    )
    return data
  },
  async edit(model) {
    return await axios.patch(endpoints.edit, model).catch(() => {
      throw new ErrorException()
    })
  },
  async create(model) {
    return await axios.post(endpoints.create, model).catch(() => {
      throw new ErrorException()
    })
  },
  async delete(id: Number | undefined) {
    return await axios.delete(endpoints.delete(id)).catch(() => {
      throw new ErrorException()
    })
  },
}
