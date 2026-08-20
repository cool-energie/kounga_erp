<script setup>
import CenteredLayout from "@/layouts/CenteredLayout.vue"
</script>

<template>
    <CenteredLayout>
        <h1>Email Confirmation Failed</h1>
        <p>We were unable to confirm your email. Please check the confirmation link or contact support for assistance.
            Or request a new confirmation email. </p>
        <!--router-link :to="{ name: 'account.request-confirmation-link' }">Request New Confirmation Email</router-link-->
    </CenteredLayout>
</template>