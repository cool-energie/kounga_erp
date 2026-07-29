<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue'
import LoginForm from '../components/LoginForm.vue'
</script>
<template>
  <CenteredLayout>
    <v-card width="500px">
      <v-card-title> Connection </v-card-title>
      <v-card-text>
        <LoginForm @success="$router.push('/')" />
      </v-card-text>
    </v-card>
  </CenteredLayout>
</template>
