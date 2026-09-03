<script setup>
import TipedIconBtn from '@/components/ui/TipedIconBtn.vue';
</script>

<template>
    <tiped-icon-btn color="primary-darken-1" icon="mdi-pencil" tip="Edit" @click="$emit('click')" />
</template>