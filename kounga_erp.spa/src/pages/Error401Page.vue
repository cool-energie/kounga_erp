<script setup>
import ErrorDescription from '@/composables/ErrorDescription.vue';

</script>

<template>
    <ErrorDescription status="401 - Unauthorized" message="You are not authorized to access this resource."
        icon="mdi-boom-gate" color="blue">
    </ErrorDescription>
</template>