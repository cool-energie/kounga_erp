<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue';

const props = defineProps(["error", "status", "message", "icon", "color", "showHomeButton"]);
</script>

<template>
    <CenteredLayout>
        <v-card variant="outlined" class="pa-4" max-width="600">
            <template #prepend>
                <v-icon :color="color" size="48">{{ icon }}</v-icon>
            </template>
            <v-card-title> {{ status || 'Error' }}</v-card-title>
            <v-card-text>
                {{ message || 'An unexpected error occurred.' }}
            </v-card-text>
        </v-card>
    </CenteredLayout>
</template>