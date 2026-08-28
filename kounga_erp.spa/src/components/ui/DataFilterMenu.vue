<script setup>
</script>

<template>
    <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-filter" variant="text" density="compact" v-bind="props">
            </v-btn>
        </template>
        <v-sheet>
            <slot />
        </v-sheet>
    </v-menu>
</template>
