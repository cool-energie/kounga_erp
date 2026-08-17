import LoginPage from '@/modules/account/pages/LoginPage.vue'
import RegisterPage from '@/modules/account/pages/RegisterPage.vue'
import ConfirmRegisterPage from '@/modules/account/pages/ConfirmRegisterPage.vue'
import EmailConfirmedPage from '@/modules/account/pages/EmailConfirmedPage.vue'
import PasswordResetRequestPage from '@/modules/account/pages/PasswordResetRequestPage.vue'
import PasswordResetPage from '@/modules/account/pages/PasswordResetPage.vue'
import EmailConfirmationFailedPage from '@/modules/account/pages/EmailConfirmationFailedPage.vue'
import { accountApi } from './accountApi'
import { isConnected } from '@/helpers/functions'
import { useRootStore } from '@/stores/rootStore'
import { ErrorException } from '@/types/Exception'

const accountRoutes = [
  {
    path: '/account',
    name: 'account',
    beforeEnter(to, from) {
      if (isConnected()) {
        return '/home'
      }
      return
    },
    children: [
      {
        path: 'login',
        name: 'account.login',
        component: LoginPage,
      },
      {
        path: 'register',
        name: 'account.register',
        component: RegisterPage,
      },
      {
        path: 'confirm-register',
        name: 'account.confirm-register',
        component: ConfirmRegisterPage,
      },
      {
        path: 'password-reset-request',
        name: 'account.password-reset-request',
        component: PasswordResetRequestPage,
      },
      {
        path: 'password-reset',
        name: 'account.password-reset',
        component: PasswordResetPage,
      },
      /*{
        path: 'email-confirmation-failed',
        name: 'account.email-confirmation-failed',
        component: EmailConfirmationFailedPage,
      },*/
      {
        path: 'confirm-email',
        name: 'account.confirm-email',
        component: EmailConfirmedPage,
        beforeEnter: async (to, from) => {
          const token = to.query.token as string | undefined
          const userId = to.query.userId as string | undefined
          if (!token || !userId) {
            return '/404'
          } else {
            await accountApi.confirmEmail(token, userId)
            const { showInfoViewMessage } = useRootStore()
            showInfoViewMessage(
              'Your email address has been successfully verified; you can now log in.',
            )
            return '/account/login'
          }
        },
      },
    ],
  },
]

export default accountRoutes
