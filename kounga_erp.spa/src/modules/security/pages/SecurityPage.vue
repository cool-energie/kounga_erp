<script setup>
import AppLayout from '@/layouts/AppLayout.vue';

const tabs = [
    {
        label: 'Users',
        path: { name: 'security.users' },
    },
    {
        label: 'Roles',
        path: { name: 'security.roles' },
    },
    {
        label: 'Claims',
        path: { name: 'security.claims' },
    },
]
const tab = ref(tabs[0])
</script>

<template>
    <AppLayout>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-tabs v-model="tab" color="primary">
                        <v-tab v-for="tab in tabs" :value="tab.label" :to="tab.path">{{ tab.label }}</v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <RouterView />
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>