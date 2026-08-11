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
    <AccountLayout title="Welcome to Our Platform!"
        text="Join us today and start your journey with our amazing services.">
        <RegisterForm @success="onRegisterSuccess" />
    </AccountLayout>
</template>