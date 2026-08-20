import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { ViewModelValues } from './view/ViewModel'
import type { DataState, DataStateStatus } from '@pinia/colada'
import type { MutationResult } from './Result'

export type Mutation = {
  model: ViewModelValues
  asyncStatus: Ref<'loading' | 'idle'>
  state: ComputedRef<DataState<void, Error, undefined>>
  status: ShallowRef<DataStateStatus>
  data: unknown
  mutate: () => void
}
