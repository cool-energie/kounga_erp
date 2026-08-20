<script setup>
import InformationPageLayout from '@/layouts/InformationPageLayout.vue';

</script>

<template>
    <InformationPageLayout title="Please check your email to confirm your registration." hasLink
        :to="{ name: 'account.login' }" linkText="Go to login page"></InformationPageLayout>
</template>