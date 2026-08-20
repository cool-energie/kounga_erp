<script setup>
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
import PasswordResetRequestForm from '../components/PasswordResetRequestForm.vue';
</script>
<template>
    <AccountLayout title="Reset your password" text="Please enter your email address">
        <PasswordResetRequestForm @success="$router.push({ name: 'account.password-reset' })" />
    </AccountLayout>
</template>
