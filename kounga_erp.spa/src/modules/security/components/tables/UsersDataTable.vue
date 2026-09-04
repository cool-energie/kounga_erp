<script setup>
import ServerSideDataTable from "@/components/ServerSideDataTable.vue";
import { usersApi } from "@/modules/security/api/usersApi";
import { formatDateStr } from "@/helpers/utils";
import FiltersDialog from "@/components/dialogs/FiltersDialog.vue";
import { useUsersFiltersStore } from "@/modules/security/stores/usersFiltersStore";
import UsersFiltersForm from "@/modules/security/components/forms/UsersFiltersForm.vue";
import EditIconBtn from "@/components/ui/EditIconBtn.vue";
import DeleteIconBtn from "@/components/ui/DeleteIconBtn.vue";
import BooleanIcon from "@/components/ui/BooleanIcon.vue";
import EditUserDialog from "@/modules/security/components/dialogs/EditUserDialog.vue";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";
import { useDeleteUser } from "@/modules/security/mutations/deleteUser";
import { UserModel } from "@/modules/security/viewModels/UserModel";

const filtersStore = useUsersFiltersStore()

const { data, isLoading, params, refetch } = usePagedFetching('users', filtersStore, usersApi.getPage)
const { model, mutate, loading, status } = useDeleteUser()

const headers = ref([
    { title: 'FirstName', key: 'firstName', align: 'end' },
    { title: 'LastName', key: 'lastName', align: 'end' },
    { title: 'UserName', key: 'userName', align: 'end' },
    { title: 'Created at', key: 'createdAt', align: 'end' },
    { title: 'Is active?', key: 'isActive', align: 'end' },
    { title: 'Email Confirmed?', key: 'emailConfirmed', align: 'end' },
    { title: '', key: 'actions', align: 'end' },
])

const dialogs = ref({
    editUser: false,
    confirmDelete: false
})

const selectedUser = ref(null)
const editMode = ref(false)

function showUpdateDialog(user) {
    selectedUser.value = user
    editMode.value = true
    dialogs.value.editUser = true
}

function showCreateDialog() {
    selectedUser.value = (new UserModel()).values
    editMode.value = false
    dialogs.value.editUser = true
}

function handleSuccess() {
    dialogs.value.editUser = false
    selectedUser.value = null
    refetch()
}

function showDeleteDialog(user) {
    selectedUser.value = user
    dialogs.value.confirmDelete = true
}

async function handleDelete() {
    model.value.id = selectedUser.value.id
    await mutate()
}

watch(status, (value) => {
    if (value === 'success') {
        refetch()
        dialogs.value.confirmDelete = false
    }
})

</script>

<template>
    <ConfirmDialog v-model="dialogs.confirmDelete" @ok="handleDelete" @canceled="dialogs.confirmDelete = false"
        :loading="loading" />
    <EditUserDialog v-model="dialogs.editUser" :edit="editMode" :user="selectedUser"
        @canceled="dialogs.editUser = false" @success="handleSuccess" />
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="d-flex justify-space-between">
                <FiltersDialog :store="filtersStore" @remove:filter="filtersStore.removeFilter($event)">
                    <UsersFiltersForm />
                </FiltersDialog>
                <v-btn @click="showCreateDialog">
                    <v-icon>mdi-plus</v-icon> Add
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ServerSideDataTable :headers="headers" :items="data?.items" :total="data?.total" :loading="isLoading"
                    :page="params.page" :itemsPerPage="params.itemsPerPage" @page-updated="params.page = $event"
                    @sort-by-updated="params.sorts = $event" multiSort>
                    <template #item.createdAt="{ item }">
                        <span>{{ formatDateStr(item.createdAt) }}</span>
                    </template>
                    <template #item.isActive="{ item }">
                        <BooleanIcon :value="item.isActive" />
                    </template>
                    <template #item.emailConfirmed="{ item }">
                        <BooleanIcon :value="item.emailConfirmed" />
                    </template>
                    <template #item.actions="{ item }">
                        <EditIconBtn @click="showUpdateDialog(item)" />
                        <DeleteIconBtn @click="showDeleteDialog(item)" />
                    </template>
                </ServerSideDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>