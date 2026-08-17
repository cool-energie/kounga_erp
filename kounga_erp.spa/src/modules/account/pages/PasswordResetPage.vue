<script setup>
import PasswordResetForm from '../components/PasswordResetForm.vue';
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
</script>

<template>
    <AccountLayout title="Password Reset" text="Please fill the form for reset ">
        <PasswordResetForm @success="$router.push({ name: 'account.login' })" />
    </AccountLayout>
</template>