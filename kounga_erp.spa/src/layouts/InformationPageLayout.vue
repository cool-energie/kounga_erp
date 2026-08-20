<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue';

const props = defineProps({
    title: {
        type: String
    },
    hasLink: {
        type: Boolean
    },
    to: {
        type: Object
    },
    linkText: {
        type: String
    }
})
</script>

<template>
    <CenteredLayout>
        <div class="d-flex flex-column align-center">
            <img src="/img/logo-remetu.png" height="100px" />
            <h1 class="color-primary">{{ title }}</h1>
            <RouterLink v-if="hasLink" :to="to">{{ linkText }}</RouterLink>
        </div>
    </CenteredLayout>
</template>