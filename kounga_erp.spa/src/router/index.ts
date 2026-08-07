import authRoutes from '@/modules/account/accountRoutes'
import settingsRoutes from '@/modules/settings/settingsRoutes'
import HomePage from '@/pages/HomePage.vue'
import Error404Page from '@/pages/Error404Page.vue'
import Error401Page from '@/pages/Error401Page.vue'
import Error500Page from '@/pages/Error500Page.vue'
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
    {
      path: '/404',
      name: '404',
      component: Error404Page,
    },
    {
      path: '/401',
      name: '401',
      component: Error401Page,
    },
    {
      path: '/500',
      name: '500',
      component: Error500Page,
    },
    ...authRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

export default router
