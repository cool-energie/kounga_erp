<script setup>
import { useResetPassword } from '../mutations/passwordReset';

const emit = defineEmits(['success']);

const { process, model, loading } = useFormProcessing(useTemplateRef('form'), useResetPassword(), emit);
</script>

<template>
    <v-form ref="form">
        <v-text-field label="Adresse mail" v-model="model.Email.value" :rules="model.Email.rules"></v-text-field>
        <v-text-field label="Reset code" v-model="model.ResetCode.value" :rules="model.ResetCode.rules"></v-text-field>
        <v-text-field label="Nouveau mot de passe" v-model="model.NewPassword.value"
            :rules="model.NewPassword.rules"></v-text-field>
        <v-btn @click="process" :loading="loading" block>Update Password</v-btn>
        <router-link :to="{ name: 'account.login' }" class="text-label-medium">Return to the login screen</router-link>
    </v-form>
</template>
