import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'
import '@/scss/all.scss'
import '@/css/colorfilter.css'


Vue.use(Vuetify)

const theme = {
  primary: '#BDBDBD',
  secondary: '#3A416F',
  accent: '#cb0c9f',
  info: '#00CAE3',
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
})
