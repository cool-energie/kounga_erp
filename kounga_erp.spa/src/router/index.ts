import settingsRoutes from '@/modules/settings/settingsRoutes'
import HomePage from '@/pages/HomePage.vue'
import Error404Page from '@/pages/Error404Page.vue'
import Error401Page from '@/pages/Error401Page.vue'
import Error500Page from '@/pages/Error500Page.vue'
import { createRouter, createWebHistory } from 'vue-router'
import accountRoutes from '@/modules/account/accountRoutes'
import { isConnected } from '@/helpers/functions'
import { useRootStore } from '@/stores/rootStore'
import securityRoutes from '@/modules/security/securityRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      /*beforeEnter(to, from, next) {
        if (!isConnected()) {
          next({ name: 'account.login' })
        }
        next()
      },*/
    },
    ...settingsRoutes,
    ...securityRoutes,
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
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
    ...accountRoutes,
  ],
})
router.beforeEach((to, from) => {
  const { clearViewMessage, markViewMessage } = useRootStore()
  clearViewMessage()
  markViewMessage()
})

export default router
