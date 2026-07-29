<script setup>
import { useLogout } from '../mutations/logout';
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const router = useRouter()
const { logout, state } = useLogout()
watch(state, (value) => {
    if (value.status == "success") router.push({ name: 'login' })
})
</script>
<template>
    <a href="#" @click="logout">logout</a>
</template>
