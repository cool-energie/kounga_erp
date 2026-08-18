<script setup>
import { useResendConfirmEmail } from '@/modules/account/mutations/resendConfirmEmail';

const emit = defineEmits(['success']);

const { process, model, loading, error } = useFormProcessing(useTemplateRef('form'), useResendConfirmEmail(), emit);
</script>

<template>
    <v-form ref="form">
        <v-text-field label="Adresse mail" v-model="model.Email.value" :rules="model.Email.rules"></v-text-field>
        <v-btn @click="process" :loading="loading" block>Receive confirmation link</v-btn>
        <router-link :to="{ name: 'account.login' }" class="text-label-medium">Return to the login screen</router-link>
        <v-alert density="compact" v-if="error" :text="error.errorMessage" :type="error.errorGravity"
            class="mt-5"></v-alert>
    </v-form>
</template>
