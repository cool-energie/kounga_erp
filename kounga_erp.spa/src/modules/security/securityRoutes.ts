import SecurityPage from '@/modules/security/pages/SecurityPage.vue'
import UsersPage from '@/modules/security/pages/UsersPage.vue'
import RolesPage from '@/modules/security/pages/RolesPage.vue'
import ClaimsPage from '@/modules/security/pages/ClaimsPage.vue'

const securityRoutes = [
  {
    path: '/security',
    name: 'security',
    component: SecurityPage,
    redirect: '/security/users',
    children: [
      {
        path: 'users',
        name: 'security.users',
        component: UsersPage,
      },
      {
        path: 'roles',
        name: 'security.roles',
        component: RolesPage,
      },
      {
        path: 'claims',
        name: 'security.claims',
        component: ClaimsPage,
      },
    ],
  },
]

export default securityRoutes
