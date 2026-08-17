// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customLightTheme = {
  colors: {
    primary: '#65BDEB',
    'primary-darken-1': '#1280C4',
    secondary: '#74797a',
    'secondary-darken-1': '#343434',
    error: '#EF5350',
    info: '#64B5F6',
    success: '#81C784',
    warning: '#FFB74D',
  },
}

const defaultFormFieldOptions = {
  variant: 'outlined',
  density: 'compact',
  //hideDetails: 'auto',
  tile: true,
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      color: 'primary-darken-1',
    },
    VTextField: {
      ...defaultFormFieldOptions,
    },
    VSelect: {
      ...defaultFormFieldOptions,
    },
    VTextarea: {
      ...defaultFormFieldOptions,
    },
    VRadioGroup: {
      ...defaultFormFieldOptions,
    },
    VDateInput: {
      ...defaultFormFieldOptions,
      inputFormat: 'dd/mm/yyyy',
      placeholder: 'dd/mm/yyyy',
      prependIcon: '',
      prependInnerIcon: '$calendar',
    },
    VCard: {
      tile: true,
    },
  },
})

export default vuetify
