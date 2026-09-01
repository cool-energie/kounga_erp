<script setup>
import ServerSideDataTable from "@/components/ServerSideDataTable.vue";
import { usersApi } from "../../api/usersApi";
import { formatDateStr } from "@/helpers/utils";
import FiltersDialog from "@/components/dialogs/FiltersDialog.vue";
import { useUsersFiltersStore } from "@/modules/security/stores/usersFiltersStore";
import UsersFiltersForm from "@/modules/security/components/forms/UsersFiltersForm.vue";
import usePagedFetching from '@/composables/pagedFetching';
import EditIconBtn from "@/components/ui/EditIconBtn.vue";
import DeleteIconBtn from "@/components/ui/DeleteIconBtn.vue";
import BooleanIcon from "@/components/ui/BooleanIcon.vue";
import EditUserDialog from "../dialogs/EditUserDialog.vue";

const filtersStore = useUsersFiltersStore()

const { data, isLoading, params } = usePagedFetching('users', filtersStore, usersApi.getPage)

const headers = ref([
    { title: 'FirstName', key: 'firstName', align: 'end' },
    { title: 'LastName', key: 'lastName', align: 'end' },
    { title: 'UserName', key: 'userName', align: 'end' },
    { title: 'Created at', key: 'createdAt', align: 'end' },
    { title: 'Is active?', key: 'isActive', align: 'end' },
    { title: 'Email Confirmed?', key: 'emailConfirmed', align: 'end' },
    { title: '', key: 'actions', align: 'end' },
])

const showEditForm = ref(false)
function showUpdateDialog(user) {
    showEditForm.value = true
}

</script>

<template>
    <EditUserDialog v-model="showEditForm" @canceled="showEditForm = false" />
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="d-flex justify-space-between">
                <FiltersDialog :store="filtersStore" @remove:filter="filtersStore.removeFilter($event)">
                    <UsersFiltersForm />
                </FiltersDialog>
                <v-btn @click="showEditForm = true">
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
                        <EditIconBtn />
                        <DeleteIconBtn />
                    </template>
                </ServerSideDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>