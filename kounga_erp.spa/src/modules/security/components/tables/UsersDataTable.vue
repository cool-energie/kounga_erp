<script setup>
import ServerSideDataTable from "@/components/ServerSideDataTable.vue";
import { usersApi } from "../../api/usersApi";
import { formatDateStr } from "@/helpers/utils";
import FiltersDialog from "@/components/dialogs/FiltersDialog.vue";
import { useUsersFiltersStore } from "@/modules/security/stores/usersFiltersStore";
import UsersFiltersForm from "@/modules/security/components/forms/UsersFiltersForm.vue";
import usePagedFetching from '@/composables/pagedFetching';

const filtersStore = useUsersFiltersStore()

const { data, isLoading, params } = usePagedFetching('users', filtersStore, usersApi.getPage)

const headers = ref([
    { title: 'FirstName', key: 'firstName', align: 'end' },
    { title: 'LastName', key: 'lastName', align: 'end' },
    { title: 'UserName', key: 'userName', align: 'end' },
    { title: 'Created at', key: 'createdAt', align: 'end' },
    { title: 'Is active?', key: 'isActive', align: 'end' },
])

</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <FiltersDialog :store="filtersStore" @remove:filter="filtersStore.removeFilter($event)">
                    <UsersFiltersForm />
                </FiltersDialog>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ServerSideDataTable :headers="headers" :items="data?.items" :total="data?.total" :loading="isLoading"
                    :page="params.page" :itemsPerPage="params.itemsPerPage" @page-updated="params.page = $event"
                    @sort-by-updated="params.sorts = $event" multiSort>
                    <template #item.isActive="{ item }">
                        <v-icon v-if="item.isActive" color="success">mdi-check</v-icon>
                        <v-icon v-else color="error">mdi-close</v-icon>
                    </template>
                    <template #item.createdAt="{ item }">
                        <span>{{ formatDateStr(item.createdAt) }}</span>
                    </template>
                </ServerSideDataTable>
            </v-col>
        </v-row>
    </v-container>
</template>