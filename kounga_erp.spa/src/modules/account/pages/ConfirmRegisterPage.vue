<script setup>
import CenteredLayout from '@/layouts/CenteredLayout.vue';
import AccountLayout from '../layouts/AccountLayout.vue';

</script>

<template>
    <CenteredLayout>
        <div class="d-flex flex-column align-center">
            <img src="/img/logo-remetu.png" height="100px" />
            <h1 class="color-primary">Please check your email to confirm your registration.</h1>
            <RouterLink :to="{ name: 'account.login' }">Go to login page</RouterLink>
        </div>
    </CenteredLayout>
</template>