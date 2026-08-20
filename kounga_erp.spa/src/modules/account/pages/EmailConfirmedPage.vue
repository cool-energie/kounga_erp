<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue';

</script>

<template>
    <CenteredLayout>
        <h1>Email Confirmed</h1>
        <p>Your email has been successfully confirmed. You can now log in to your account.</p>
        <router-link :to="{ name: 'account.login' }">Go to Login</router-link>
    </CenteredLayout>
</template>