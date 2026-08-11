<script setup>
import { useTemplateRef } from 'vue';
import { useRegister } from '../mutations/register'
import { useFormProcessing } from '@/composables/formProcessing'

const emit = defineEmits(['success']);

const { process, model, loading, hasErrors } = useFormProcessing(useTemplateRef('form'), useRegister(), emit);
</script>
<template>
    <v-form ref="form" class="d-flex flex-column ga-3 pa-5">
        <v-text-field label="First Name" v-model="model.FirstName.value" :rules="model.FirstName.rules"
            required></v-text-field>
        <v-text-field label="Last Name" v-model="model.LastName.value" :rules="model.LastName.rules"
            required></v-text-field>
        <v-text-field label="Email" v-model="model.Email.value" :rules="model.Email.rules" required></v-text-field>
        <v-text-field label="Phone Number" v-model="model.PhoneNumber.value" :rules="model.PhoneNumber.rules"
            required></v-text-field>
        <v-text-field label="Password" v-model="model.Password.value" :rules="model.Password.rules" type="password"
            required></v-text-field>
        <v-text-field label="Confirm Password" v-model="model.ConfirmPassword.value"
            :rules="model.ConfirmPassword.rules" type="password" required></v-text-field>
        <v-date-input v-model="model.DateOfBirth.value" :rules="model.DateOfBirth.rules"
            label="Date of Birth"></v-date-input>
        <v-btn @click="process" block :loading="loading">Register</v-btn>
        <div class="d-flex ga-2"><span>Do you already have an account? </span><router-link
                :to="{ name: 'account.login' }">login</router-link></div>
        <v-alert v-if="hasErrors" density="compact" style="flex: unset;"
            text="Une erreur est survenue veuillez verifiez les informations saisies." type="error"
            class="mt-5"></v-alert>
    </v-form>
</template>