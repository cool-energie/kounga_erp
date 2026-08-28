<script setup>
const props = defineProps(['color', 'tip', 'icon'])
const emit = defineEmits(['click'])
</script>

<template>
    <v-tooltip :text="tip">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon variant="text" :color="color" @click="$emit('click')"><v-icon
                    :icon="icon"></v-icon></v-btn>
        </template>
    </v-tooltip>
</template>