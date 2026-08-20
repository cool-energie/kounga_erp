<script setup>
import LoginForm from '../components/LoginForm.vue'
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
</script>
<template>
  <AccountLayout title="Login" text="Please fill the form for login">
    <LoginForm @success="$router.push({ name: 'home' })" />
  </AccountLayout>
</template>
