<script setup>
</script>

<template>
    <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems"
        :items-length="totalItems" :loading="loading" :search="search" item-value="name" @update:options="loadItems">
        <template v-slot:tfoot>
            <tr>
                <td>
                    <v-text-field v-model="name" class="ma-2" density="compact" placeholder="Search name..."
                        hide-details></v-text-field>
                </td>
                <td>
                    <v-text-field v-model="calories" class="ma-2" density="compact" placeholder="Minimum calories"
                        type="number" hide-details></v-text-field>
                </td>
            </tr>
        </template>
    </v-data-table-server>
</template>