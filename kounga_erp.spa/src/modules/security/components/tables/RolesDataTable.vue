<script setup>
import { rolesApi } from '@/modules/security/api/rolesApi';
import { useRolesFiltersStore } from "@/modules/security/stores/rolesFiltersStore";
import ServerSideDataTable from "@/components/ServerSideDataTable.vue";
import { formatDateStr } from "@/helpers/utils";
import EditIconBtn from "@/components/ui/EditIconBtn.vue";
import DeleteIconBtn from "@/components/ui/DeleteIconBtn.vue";
import BooleanIcon from "@/components/ui/BooleanIcon.vue";
import FiltersDialog from "@/components/dialogs/FiltersDialog.vue";
import RolesFiltersForm from "@/modules/security/components/forms/RolesFiltersForm.vue";
import { useDeleteRole } from "@/modules/security/mutations/deleteRole";
import useCrudDialogs from "@/composables/crudDialogs";
import { RoleModel } from "@/modules/security/viewModels/RoleModel";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog.vue";
import EditRoleDialog from "@/modules/security/components/dialogs/EditRoleDialog.vue";

const filtersStore = useRolesFiltersStore()
const { data, isLoading, params, refetch } = usePagedFetching('roles', filtersStore, rolesApi.getPage)
const { model, mutate, loading, status } = useDeleteRole()

const headers = ref([
    { title: 'Name', key: 'name', align: 'start' },
    { title: 'Description', key: 'description', align: 'start' },
    { title: 'Created at', key: 'createdAt', align: 'end' },
    { title: 'Is active?', key: 'isActive', align: 'end' },
    { title: '', key: 'actions', align: 'end' },
])
const {
    dialogs,
    selectedItem,
    showUpdateDialog,
    showCreateDialog,
    handleSuccess,
    showDeleteDialog,
    handleDelete,
    editMode,
} = useCrudDialogs(new RoleModel(), model, refetch, mutate, status)
</script>

<template>
    <ConfirmDialog v-model="dialogs.confirmDelete" @ok="handleDelete" @canceled="dialogs.confirmDelete = false"
        :loading="loading" />
    <EditRoleDialog v-model="dialogs.edit" :edit="editMode" :role="selectedItem" @canceled="dialogs.edit = false"
        @success="handleSuccess" />
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="d-flex justify-space-between">
                <FiltersDialog :store="filtersStore" @remove:filter="filtersStore.removeFilter($event)">
                    <RolesFiltersForm />
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
                    <template #item.actions="{ item }">
                        <EditIconBtn @click="showUpdateDialog(item)" />
                        <DeleteIconBtn @click="showDeleteDialog(item)" />
                    </template>
                </ServerSideDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>