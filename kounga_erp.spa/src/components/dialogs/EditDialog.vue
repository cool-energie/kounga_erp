<script setup>
const props = defineProps({
    entity: {
        type: String,
        required: true,
    },
    /*    process: {
            type: Function,
            required: true
        },*/
    loading: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
})

var model = defineModel({ type: Boolean })
const emit = defineEmits(['canceled', 'process'])

/*watch(props.status, (value) => {
    if (value === 'success') {
        model = false
    }
})*/

</script>

<template>
    <v-dialog v-model="model" persistent absolute :v-bind="$attrs">
        <v-card :title="`Create / Update ${entity}`">
            <v-card-text>
                <slot />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn text="Cancel" prepend-icon="mdi-cancel" color="gray" :disabled="loading"
                    @click="$emit('canceled')"></v-btn>
                <v-btn text="Save Modifications" prepend-icon="mdi-content-save-move-outline" color="success"
                    :disabled="loading" @click="$emit('process')"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>