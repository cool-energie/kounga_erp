<script setup>
import { RouterView } from 'vue-router'
import { useRootStore } from './stores/rootStore';
import { onMounted, onUpdated, watch } from 'vue';

const rootStore = useRootStore()

//onUpdated(() => console.log(rootStore.getViewMessages()))
</script>
<template>
  <v-container v-if="rootStore.viewMessages?.length">
    <v-alert v-for="m in rootStore.viewMessages" :color="m.color" :icon="m.prependIcon" title="" :text="m.text"
      class="mb-2" closable></v-alert>
  </v-container>

  <v-snackbar-queue ref="snackbarQueue" v-model="rootStore.snackbars" :total-visible="5" location="top end"
    transition="bouncy-slide-auto" closable contained close-on-back>
    <template v-slot:actions="{ item, props }">
      <v-icon-btn v-if="!item.vertical" aria-label="Close" icon="$close" size="small" variant="text"
        v-bind="props"></v-icon-btn>
      <v-btn v-else text="Close" variant="text" v-bind="props"></v-btn>
    </template>
  </v-snackbar-queue>

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

.bouncy-slide-x-transition-enter-active,
.bouncy-slide-x-transition-leave-active,
.bouncy-slide-x-transition-move,
.bouncy-slide-x-reverse-transition-enter-active,
.bouncy-slide-x-reverse-transition-leave-active,
.bouncy-slide-x-reverse-transition-move {
  transition: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bouncy-slide-x-transition-enter-from,
.bouncy-slide-x-transition-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.bouncy-slide-x-reverse-transition-enter-from,
.bouncy-slide-x-reverse-transition-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
</style>
