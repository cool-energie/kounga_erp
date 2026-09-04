<script setup>
import { useRolesFiltersStore } from '@/modules/security/stores/rolesFiltersStore';
import { storeToRefs } from 'pinia';
import { onMounted, useTemplateRef } from 'vue';

const rolesFiltersStore = useRolesFiltersStore()

const { filtersModel, filtersForm } = storeToRefs(rolesFiltersStore)
const form = useTemplateRef("form")
onMounted(() => filtersForm.value = form.value)

</script>

<template>
    <v-form ref="form">
        <v-row dense>
            <v-col cols="6">
                <v-text-field label="Name" v-model="filtersModel.Name.value" :rules="filtersModel.Name.rules" />
            </v-col>
            <v-col cols="6">
                <v-switch label="Is Active" v-model="filtersModel.isActive.value" indeterminate
                    color="primary-darken-1" />
            </v-col>
        </v-row>
    </v-form>
</template>
<style>
.v-overlay__content {
    position: absolute !important;
}
</style>