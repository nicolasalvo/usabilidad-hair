import { createI18n } from 'vue-i18n'
import es from './es.json'
import ca from './ca.json'
import en from './en.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'es', // default locale
  fallbackLocale: 'en',
  messages: {
    es,
    ca,
    en
  }
})

export default i18n
