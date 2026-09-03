<script setup>
const model = defineModel({ type: Boolean })
const props = defineProps({
    okText: {
        type: String,
        default: 'Confirm'
    },
    message: {
        type: String,
        default: 'Are you sure you want to perform this action ?'
    },
    loading: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['canceled', 'ok'])
</script>

<template>
    <v-dialog v-model="model" max-width="500px" persistent absolute :v-bind="$attrs">
        <v-card>
            <v-card-text>
                <v-icon>mdi-chat-alert-outline</v-icon> {{ message }}
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn text="Cancel" prepend-icon="mdi-cancel" color="gray" @click="emit('canceled')"
                    :disabled="loading"></v-btn>
                <v-btn :text="okText" prepend-icon="mdi-check" color="primary" @click="emit('ok')"
                    :disabled="loading"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>