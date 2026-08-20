<script setup>
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
import ResendConfirmEmailForm from '../components/ResendConfirmEmailForm.vue';
</script>
<template>
    <AccountLayout title="Reset your password" text="Please enter your email address">
        <ResendConfirmEmailForm @success="$router.push({ name: 'account.login' })" />
    </AccountLayout>
</template>
