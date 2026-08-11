<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <RouterView />
</template>

<style>
@layer global, theme;

@layer global {
  :root {
    --brand-blue: #65bdeb;
  }

  a :any-link {
    color: var(--brand-blue);
    font-weight: bold;
  }
}
</style>
