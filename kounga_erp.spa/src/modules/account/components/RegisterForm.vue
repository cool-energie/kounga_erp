<script setup>
import { useTemplateRef } from 'vue';
import { useRegister } from '../mutations/register'
import { useFormProcessing } from '@/composables/formProcessing'

const { process, model, loading, hasErrors } = useFormProcessing(useTemplateRef('form'), useRegister());

</script>
<template>
    <v-form ref="form">
        <v-row>
            <v-col cols="6">
                <v-text-field label="First Name" v-model="model.FirstName.value" :rules="model.FirstName.rules"
                    required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Last Name" v-model="model.LastName.value" :rules="model.LastName.rules"
                    required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field label="Email" v-model="model.Email.value" :rules="model.Email.rules"
                    required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Phone Number" v-model="model.PhoneNumber.value" :rules="model.PhoneNumber.rules"
                    required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field label="Password" v-model="model.Password.value" :rules="model.Password.rules"
                    type="password" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Confirm Password" v-model="model.ConfirmPassword.value"
                    :rules="model.ConfirmPassword.rules" type="password" required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-date-input v-model="model.DateOfBirth.value" :rules="model.DateOfBirth.rules"
                    label="Date of Birth"></v-date-input>
            </v-col>
        </v-row>
        <v-btn @click="process" block :loading="loading">Register</v-btn>
        <v-alert v-if="hasErrors" density="compact"
            text="Une erreur est survenue veuillez verifiez les informations saisies." type="error"
            class="mt-5"></v-alert>
    </v-form>
</template>