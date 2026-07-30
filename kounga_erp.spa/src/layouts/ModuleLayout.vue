<script setup>
const props = defineProps({
    menuItems: {
        type: Array,
    }
})
</script>

<template>
    <v-layout class="rounded rounded-md border">
        <v-navigation-drawer>
            <v-list density="compact" open-strategy="single" indent="14px">
                <template v-for="(item, index) in menuItems">
                    <v-divider v-if="index != 0" />
                    <v-list-group v-if="item.children" :value="item.label" fluid>
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" :title="item.label" slim></v-list-item>
                        </template>
                        <template v-for="(item, i) in item.children" :key="item.label">
                            <v-divider />
                            <v-list-item :title="item.label" :to="item.to" slim></v-list-item>
                        </template>
                    </v-list-group>
                    <v-list-item v-else :prepend-icon="item.icon" :title="item.label" :to="item.to" slim></v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" height="300">
            <v-container>
                <v-sheet border="dashed md" color="surface-light" height="200" rounded="lg" width="100%"></v-sheet>
            </v-container>
        </v-main>
    </v-layout>
</template>