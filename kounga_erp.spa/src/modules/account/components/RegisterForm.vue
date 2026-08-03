<script setup>
import { ref, useTemplateRef } from 'vue';
import RegisterModel from '@/modules/account/viewModels/RegisterModel';

const model = ref(new RegisterModel());
const form = useTemplateRef('form');

function register() {
    form.value.validate();
    if (!form.value.isValid) return;
    // Handle registration logic here
}

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
        <v-btn @click="register" block>Register</v-btn>
    </v-form>
</template>