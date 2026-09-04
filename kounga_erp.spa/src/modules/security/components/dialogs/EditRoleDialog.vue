<script setup>
import EditDialog from '@/components/dialogs/EditDialog.vue';
import { useEditRole } from '@/modules/security/mutations/editRole';
import { computed, onMounted, onUpdated, useTemplateRef, watch } from 'vue';
import { setModelvalues } from '@/types/view/ViewModel';
import EditRoleForm from '@/modules/security/components/forms/EditRoleForm.vue';

const props = defineProps({
    edit: {
        type: Boolean,
        required: true
    },
    role: {
        type: Object,

    }
})
const emit = defineEmits(['success', 'canceled'])
const form = useTemplateRef("form")
const formRef = computed(() => form.value.ref)
const { process, model, loading, status } = useFormProcessing(formRef, useEditRole(), emit);
var dialog = defineModel({ type: Boolean })

watch(status, (value) => {
    if (value === 'success') {
        emit('success')
    }
})
onUpdated(() => {
    console.log("role", props.role)
})


</script>

<template>
    <EditDialog @afterEnter="setModelvalues(model, role)" v-model="dialog" entity="role" @process="process"
        :loading="loading" :status="status" max-width="800px" @canceled="$emit('canceled')">
        <EditRoleForm v-model="model" :edit="edit" :loading="loading" ref="form" />
    </EditDialog>
</template>