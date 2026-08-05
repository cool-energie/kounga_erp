import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { ViewModelValues } from './view/ViewModel'
import type { DataState, DataStateStatus } from '@pinia/colada'

export type Mutation = {
  model: ViewModelValues
  asyncStatus: Ref<'loading' | 'idle'>
  state: ComputedRef<DataState<void, Error, undefined>>
  status: ShallowRef<DataStateStatus>
  mutate: () => void
}
