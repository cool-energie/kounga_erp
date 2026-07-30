<script setup>
const props = defineProps(["label", "icon", "to"])
</script>

<template>
    <v-tooltip :text="label">
        <template v-slot:activator="{ props }">
            <v-list-item link v-bind="props" :to="to"><v-icon :icon="icon" /></v-list-item>
        </template>
    </v-tooltip>
</template>