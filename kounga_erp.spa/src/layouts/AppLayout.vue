<script setup lang="ts">
import NotificationsAppBarMenu from '@/components/NotificationsAppBarMenu.vue';
import LabeledListItem from '@/components/ui/LabeledListItem.vue';
import { RouterView } from 'vue-router';

const appItems = [
    {
        icon: "mdi-text-box-check",
        label: "Gestion des projets",
        to: "/projects"
    },
    {
        icon: "mdi-calendar-clock",
        label: "Planning",
        to: "/planning"
    },
    {
        icon: "mdi-badge-account",
        label: "Gestion des employés",
        to: "/employees"
    },
    {
        icon: "mdi-cog",
        label: "Parametres",
        to: "/settings"
    },
]

</script>

<template>
    <v-layout class="rounded rounded-md border">
        <v-app-bar>
            <template #title>
                <v-img src="/public/img/logo-remetu.png" width="150px" />
            </template>
            <template #append>
                <div>
                    <notifications-app-bar-menu />
                </div>
            </template>
        </v-app-bar>

        <v-navigation-drawer permanent rail>
            <v-list nav>
                <v-list-item><v-icon>mdi-apps</v-icon></v-list-item>
                <labeled-list-item v-for="item in appItems" :key="item.label" :icon="item.icon" :label="item.label"
                    :to="item.to" />
            </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center">
            <v-container fluid class="pa-0">
                <RouterView />
            </v-container>
        </v-main>
    </v-layout>
</template>