<script setup>
import { RoleModel } from '@/modules/security/viewModels/RoleModel';
import { onMounted, onUpdated, useTemplateRef } from 'vue';

const props = defineProps({
    edit: {
        type: Boolean,
        required: true
    },
    loading: {
        type: Boolean,
        required: true,
    }
})

const model = defineModel({ type: RoleModel, default: () => new RoleModel() })
const ref = useTemplateRef('form')

defineExpose({
    ref
})

onMounted(() => {
    console.log("model", model)
})
</script>

<template>
    <v-form :disabled="loading" :v-bind="$attrs" class="form" ref="form">
        <v-text-field label="Name" v-model="model.name.value" :rules="model.name.rules" required></v-text-field>
        <v-text-field label="Description" v-model="model.description.value"
            :rules="model.description.rules"></v-text-field>
        <v-checkbox v-model="model.isActive.value" :rules="model.isActive.rules" label="Active ?" />
    </v-form>
</template>

<style>
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
}
</style>