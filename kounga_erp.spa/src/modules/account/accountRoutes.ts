import LoginPage from '@/modules/account/pages/LoginPage.vue'
import RegisterPage from '@/modules/account/pages/RegisterPage.vue'

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
]

export default authRoutes
