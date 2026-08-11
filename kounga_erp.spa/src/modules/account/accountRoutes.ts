import LoginPage from '@/modules/account/pages/LoginPage.vue'
import RegisterPage from '@/modules/account/pages/RegisterPage.vue'
import ConfirmRegisterPage from '@/modules/account/pages/ConfirmRegisterPage.vue'
import EmailConfirmedPage from '@/modules/account/pages/EmailConfirmedPage.vue'
import PasswordResetRequestPage from '@/modules/account/pages/PasswordResetRequestPage.vue'
import { accountApi } from './accountApi'

const accountRoutes = [
  {
    path: '/account/login',
    name: 'account.login',
    component: LoginPage,
  },
  {
    path: '/account/register',
    name: 'account.register',
    component: RegisterPage,
  },
  {
    path: '/account/confirm-register',
    name: 'account.confirm-register',
    component: ConfirmRegisterPage,
  },
  {
    path: '/account/password-reset-request',
    name: 'account.password-reset-request',
    component: PasswordResetRequestPage,
  },
  {
    path: '/account/confirm-email',
    name: 'account.confirm-email',
    component: EmailConfirmedPage,
    beforeEnter: async (to, from, next) => {
      const token = to.query.token as string | undefined
      const userId = to.query.userId as string | undefined
      if (!token || !userId) {
        next({ name: '404' })
      } else {
        try {
          await accountApi.confirmEmail(token, userId)
          next({ name: 'account.login' })
        } catch {
          next({ name: '404' })
        }
      }
    },
  },
]

export default accountRoutes
