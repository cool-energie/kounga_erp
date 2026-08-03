<script setup>
import LoginForm from '../components/LoginForm.vue'
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue'
</script>
<template>
  <AccountLayout width="500px" title="Connection">
    <LoginForm @success="$router.push('/account/login')" />
  </AccountLayout>
</template>
