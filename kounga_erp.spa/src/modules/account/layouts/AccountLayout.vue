<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue'

const props = defineProps(["width", "title", "text"])
</script>

<template>
    <CenteredLayout>
        <v-card width="1000px" v-bind="$attrs" class="d-flex flex-row justify-space-between ga-5">
            <div class="w-50 bg-primary-darken-1 d-flex flex-column justify-center align-center text-center pa-5">
                <img src="/img/logo_remetu white.png" height="100px" />
                <h1 class="text-h4 text-white mb-4">{{ title }}</h1>
                <p class="text-subtitle-1 text-white">{{ text }}
                </p>
            </div>
            <div class="w-50 d-flex flex-column justify-center align-strech pr-5">
                <slot />
            </div>
        </v-card>
    </CenteredLayout>
</template>