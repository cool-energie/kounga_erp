<script setup>
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
import ResetPasswordRequestForm from '../components/PasswordResetRequestForm.vue/index.js';
</script>
<template>
    <AccountLayout title="Reset your password" text="Please enter your email address">
        <ResetPasswordRequestForm @success="$router.push({ name: 'account.password-reset' })" />
    </AccountLayout>
</template>
