<script setup>
import EditDialog from '@/components/dialogs/EditDialog.vue';
import EditUserForm from '../forms/EditUserForm.vue';
import { useEditUser } from '../../mutations/editUser.ts';
import { computed, onUpdated, useTemplateRef } from 'vue';

const props = defineProps({
    edit: {
        type: Boolean,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['succed', 'canceled'])
const form = useTemplateRef("form")
const formRef = computed(() => form.value.ref)
const { process, model, loading, status } = useFormProcessing(formRef, useEditUser(), emit);
var dialog = defineModel({ type: Boolean })

watch(status, (value) => {
    if (value === 'success') {
        dialog = false
    }
})

onUpdated(() => {
    console.log("model")
    console.log(model)
    if (props.edit) {
        model.setValues()
    }
})

</script>

<template>
    <EditDialog v-model="dialog" entity="user" @process="process" :loading="loading" :status="status" max-width="800px"
        @canceled="$emit('canceled')">
        <EditUserForm :model="model" :loading="loading" ref="form" />
    </EditDialog>
</template>