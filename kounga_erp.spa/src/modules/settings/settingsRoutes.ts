import SettingsGeneralPage from './pages/SettingsGeneralPage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import SettingsUsersPage from './pages/SettingsUsersPage.vue'
import SettingsCompaniesPage from './pages/SettingsCompaniesPage.vue'

const settingsRoutes = [
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage,
    redirect: '/settings/general',
    children: [
      {
        path: 'general',
        name: 'settings.general',
        component: SettingsGeneralPage,
      },
      {
        path: 'users',
        name: 'settings.users',
        component: SettingsUsersPage,
      },
      {
        path: 'companies',
        name: 'settings.companies',
        component: SettingsCompaniesPage,
      },
    ],
  },
]

export default settingsRoutes
