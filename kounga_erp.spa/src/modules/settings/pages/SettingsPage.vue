<script setup>
import ModuleLayout from '@/layouts/ModuleLayout.vue';

const menuItems = [
    {
        label: "Parametres généraux",
        to: "/settings/general",
        icon: "mdi-wrench-cog"
    },
    {
        label: "Utilisateurs et Sociétés",
        icon: "mdi-account",
        children: [
            {
                label: "Utilisateurs",
                to: "/settings/users"
            },
            {
                label: "Sociétés",
                to: "/settings/companies"
            }
        ]
    },
]

</script>

<template>
    <ModuleLayout :menuItems="menuItems">
        <RouterView />
    </ModuleLayout>
</template>