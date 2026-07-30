<script setup>
</script>

<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-icon-btn v-bind="props" icon="mdi-bell-outline" />
        </template>

        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>