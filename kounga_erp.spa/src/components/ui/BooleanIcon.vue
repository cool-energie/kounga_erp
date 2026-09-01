<script setup>
const props = defineProps({
    value: {
        type: Boolean,
        required: true,
    }
})
</script>

<template>
    <v-icon v-if="value" color="success">mdi-check</v-icon>
    <v-icon v-else color="error">mdi-close</v-icon>
</template>