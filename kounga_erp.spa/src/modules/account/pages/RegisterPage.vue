<script setup>
import RegisterForm from '../components/RegisterForm.vue';
import AccountLayout from '@/modules/account/layouts/AccountLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function onRegisterSuccess() {
    // Redirect to the confirm registration page after successful registration
    router.push({ name: 'account.confirm-register' });
}

</script>
<template>
    <AccountLayout width="800px" title="Register">
        <RegisterForm @success="onRegisterSuccess" />
    </AccountLayout>
</template>