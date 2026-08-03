<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue'

const props = defineProps(["width", "title"])
</script>

<template>
    <CenteredLayout>
        <v-card :width="width">
            <v-card-title> {{ title }} </v-card-title>
            <v-card-text>
                <slot />
            </v-card-text>
        </v-card>
    </CenteredLayout>
</template>