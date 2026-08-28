<script setup>
import { useUsersFiltersStore } from '@/modules/security/stores/usersFiltersStore';
import { storeToRefs } from 'pinia';
import { onMounted, useTemplateRef } from 'vue';

const usersFiltersStore = useUsersFiltersStore()

const { filtersModel, filtersForm } = storeToRefs(usersFiltersStore)
const form = useTemplateRef("form")
onMounted(() => filtersForm.value = form.value)

</script>

<template>
    <v-form ref="form">
        <v-row dense>
            <v-col cols="6">
                <v-text-field label="FirstName" v-model="filtersModel.FirstName.value"
                    :rules="filtersModel.FirstName.rules" />
            </v-col>
            <v-col cols="6">
                <v-text-field label="lastName" v-model="filtersModel.LastName.value"
                    :rules="filtersModel.LastName.rules" />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="6">
                <v-text-field label="UserName" v-model="filtersModel.UserName.value"
                    :rules="filtersModel.UserName.rules" />
            </v-col>
            <v-col cols="6">
                <v-date-input v-model="filtersModel.CreatedAt.value" label="Creation Date"
                    multiple="range"></v-date-input>
            </v-col>
        </v-row>
    </v-form>
</template>
<style>
.v-overlay__content {
    position: absolute !important;
}
</style>