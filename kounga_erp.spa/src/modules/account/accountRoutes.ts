import LoginPage from '@/modules/account/pages/LoginPage.vue'
import RegisterPage from '@/modules/account/pages/RegisterPage.vue'
import ConfirmRegisterPage from '@/modules/account/pages/ConfirmRegisterPage.vue'

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
]

export default authRoutes
