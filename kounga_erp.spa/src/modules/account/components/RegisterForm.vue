<script setup>
import { useRegister } from '@/modules/account/mutations/register';

const emit = defineEmits(['success']);

const { process, model, loading } = useFormProcessing(useTemplateRef('form'), useRegister(), emit);
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
        <div class="d-flex ga-2 text-label-medium"><span>Do you already have an account? </span><router-link
                :to="{ name: 'account.login' }">login</router-link></div>
    </v-form>
</template>