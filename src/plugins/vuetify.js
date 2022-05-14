import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'
import MatlabIcon from '../assets/icon/MatlabIcon.vue'

Vue.use(Vuetify)

const theme = {
  primary: '#BDBDBD',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  icons: {
    values: {
      matlab: {
        component: MatlabIcon,
      }
    }
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
