<script setup>
import TipedIconBtn from '@/components/ui/TipedIconBtn.vue';
</script>

<template>
    <tiped-icon-btn color="error" icon="mdi-trash-can" tip="Delete" @click="$emit('click')" />
</template>