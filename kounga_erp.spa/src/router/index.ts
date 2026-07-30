import authRoutes from '@/modules/auth/authRoutes'
import settingsRoutes from '@/modules/settings/settingsRoutes'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [...settingsRoutes],
    },
    ...authRoutes,
  ],
})

export default router
