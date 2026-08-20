<script setup>
import ErrorDescription from '@/composables/ErrorDescription.vue';

</script>

<template>
    <ErrorDescription status="500 - Internal Server Error" message="An internal server error occurred."
        icon="mdi-server" color="red">
    </ErrorDescription>
</template>