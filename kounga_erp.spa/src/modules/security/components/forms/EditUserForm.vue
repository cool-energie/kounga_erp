<script setup>
import { UserModel } from '@/modules/security/viewModels/UserModel';
import { useTemplateRef } from 'vue';

const props = defineProps({
    model: {
        type: UserModel,
        required: true
    },
    loading: {
        type: Boolean,
        required: true,
    }
})

const ref = useTemplateRef('form')

defineExpose({
    ref
})
</script>

<template>
    <v-form :disabled="loading" :v-bind="$attrs" class="form" ref="form">
        <v-text-field label="First Name" v-model="model.firstName.value" :rules="model.firstName.rules"
            required></v-text-field>
        <v-text-field label="Last Name" v-model="model.lastName.value" :rules="model.lastName.rules"
            required></v-text-field>
        <v-text-field label="Email" v-model="model.email.value" :rules="model.email.rules" required></v-text-field>
        <v-text-field label="Phone Number" v-model="model.phoneNumber.value" :rules="model.phoneNumber.rules"
            required></v-text-field>
        <v-text-field label="Password" v-model="model.password.value" :rules="model.password.rules" type="password"
            required></v-text-field>
        <v-text-field label="Confirm Password" v-model="model.confirmPassword.value"
            :rules="model.confirmPassword.rules" type="password" required></v-text-field>
        <v-date-input v-model="model.dateOfBirth.value" :rules="model.dateOfBirth.rules"
            label="Date of Birth"></v-date-input>
        <v-checkbox v-model="model.isActive.value" :rules="model.isActive.rules" label="Active ?" />
    </v-form>
</template>

<style>
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
}
</style>