<script setup>
import { useLogin } from '../mutations/login'

const visible = ref(false)

const emit = defineEmits(['success']);

const { process, model, loading } = useFormProcessing(useTemplateRef('form'), useLogin(), emit);
</script>

<template>
    <v-form ref="form">
        <v-text-field label="Adresse mail" prepend-inner-icon="mdi-email-outline" v-model="model.Email.value"
            :rules="model.Email.rules"></v-text-field>
        <v-text-field label="Mot de passe" prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" v-model="model.Password.value"
            :rules="model.Password.rules" :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"></v-text-field>
        <v-btn @click="process" :loading="loading" block>Connection</v-btn>
        <div class="d-flex ga-1 mt-2 text-label-medium"><span>You don't have an account yet? </span><router-link
                :to="{ name: 'account.register' }">Register</router-link></div>
        <div class="d-flex ga-1 mt-2 text-label-medium"><span>Have you forgotten your password? </span><router-link
                :to="{ name: 'account.password-reset-request' }">Forgotten password</router-link></div>
        <div class="d-flex ga-1 mt-2 text-label-medium"><span>Your email address is not verified? </span><router-link
                :to="{ name: 'account.resend-confirm-email' }">resend the confirmation link</router-link></div>
    </v-form>
</template>
