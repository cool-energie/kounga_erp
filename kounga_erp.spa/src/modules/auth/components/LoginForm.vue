<script setup>
import { computed, useTemplateRef, watch, ref } from 'vue'
import { useLogin } from '../mutations/login'

const emit = defineEmits(['success', 'error', 'pending'])

const email = ref('')
const password = ref('')
const { login, state, asyncStatus } = useLogin()
const loading = computed(() => asyncStatus == 'loading')
const hasErrors = computed(() => state.value.status == 'error')
const validator = {
    email: [(v) => !!v || "L' adresse mail est requis."],
    password: [(v) => !!v || 'Le mot de passe est requis.'],
}

const form = useTemplateRef('form')

async function process() {
    await form.value.validate()
    if (!form.value.isValid) return
    login({ email: email.value, password: password.value })
}

watch(state, (value) => emit(value.status))
</script>

<template>
    <v-form ref="form">
        <v-text-field label="Adresse mail" v-model="email" :rules="validator.email"></v-text-field>
        <v-text-field label="Mot de passe" v-model="password" :rules="validator.password"></v-text-field>
        <v-btn @click="process" :loading="loading">Connection</v-btn>
        <v-alert v-if="hasErrors" density="compact"
            text="Une erreur est survenue veuillez verifiez les informations saisies." type="error"
            class="mt-5"></v-alert>
    </v-form>
</template>
