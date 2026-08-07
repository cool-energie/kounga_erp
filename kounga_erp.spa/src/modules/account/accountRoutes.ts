import LoginPage from '@/modules/account/pages/LoginPage.vue'
import RegisterPage from '@/modules/account/pages/RegisterPage.vue'
import ConfirmRegisterPage from '@/modules/account/pages/ConfirmRegisterPage.vue'
import ConfirmEmailPage from '@/modules/account/pages/ConfirmEmailPage.vue'

const authRoutes = [
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
    path: '/account/confirm-email',
    name: 'account.confirm-email',
    component: ConfirmEmailPage,
  },
]

export default authRoutes
