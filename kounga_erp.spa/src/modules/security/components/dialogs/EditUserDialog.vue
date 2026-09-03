<script setup>
import EditDialog from '@/components/dialogs/EditDialog.vue';
import EditUserForm from '@/modules/security/components/forms/EditUserForm.vue';
import { useEditUser } from '@/modules/security/mutations/editUser';
import { computed, useTemplateRef, watch } from 'vue';
import { setModelvalues } from '@/types/view/ViewModel';

const props = defineProps({
    edit: {
        type: Boolean,
        required: true
    },
    user: {
        type: Object,

    }
})
const emit = defineEmits(['success', 'canceled'])
const form = useTemplateRef("form")
const formRef = computed(() => form.value.ref)
const { process, model, loading, status } = useFormProcessing(formRef, useEditUser(), emit);
var dialog = defineModel({ type: Boolean })

watch(status, (value) => {
    if (value === 'success') {
        emit('success')
    }
})


</script>

<template>
    <EditDialog @afterEnter="setModelvalues(model, user)" v-model="dialog" entity="user" @process="process"
        :loading="loading" :status="status" max-width="800px" @canceled="$emit('canceled')">
        <EditUserForm v-model="model" :edit="edit" :loading="loading" ref="form" />
    </EditDialog>
</template>