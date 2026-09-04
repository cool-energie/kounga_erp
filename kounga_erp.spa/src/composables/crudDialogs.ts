import type { ViewModel } from '@/types/view/ViewModel'
import type { DataStateStatus } from '@pinia/colada'
import { ref, watch, type Ref, type ShallowRef } from 'vue'

export default function useCrudDialogs(
  editModel: ViewModel,
  deleteModel: Ref<any>,
  refetch: Function,
  delMutate: Function,
  deleteStatus: ShallowRef<DataStateStatus>,
) {
  const dialogs = ref({
    edit: false,
    confirmDelete: false,
  })
  const selectedItem = ref(null)
  const editMode = ref(false)

  function showUpdateDialog(item) {
    selectedItem.value = item
    editMode.value = true
    dialogs.value.edit = true
  }

  function showCreateDialog() {
    selectedItem.value = new (Object.getPrototypeOf(editModel).constructor)().values
    editMode.value = false
    dialogs.value.edit = true
  }

  function handleSuccess() {
    dialogs.value.edit = false
    selectedItem.value = null
    refetch()
  }

  function showDeleteDialog(item) {
    selectedItem.value = item
    dialogs.value.confirmDelete = true
  }

  async function handleDelete() {
    deleteModel.value.id = selectedItem.value.id
    await delMutate()
  }

  watch(deleteStatus, (value) => {
    if (value === 'success') {
      refetch()
      dialogs.value.confirmDelete = false
    }
  })

  return {
    dialogs,
    selectedItem,
    showUpdateDialog,
    showCreateDialog,
    handleSuccess,
    showDeleteDialog,
    handleDelete,
    editMode,
  }
}
