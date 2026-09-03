import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { EntityViewModel } from './view/ViewModel'
import type { DataState, DataStateStatus } from '@pinia/colada'

export type Mutation = {
  model: EntityViewModel
  asyncStatus: Ref<'loading' | 'idle'>
  state: ComputedRef<DataState<void, Error, undefined>>
  status: ShallowRef<DataStateStatus>
  data: unknown
  mutate: () => void
}
