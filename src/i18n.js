import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import DictRU from './langRU.json';
import DictEN from './langEN.json';

const resources = {
    ru: {
        translation: DictRU
    },
    en: {
        translation: DictEN
    }
};

i18next.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'ru',
    resources,
    lng: 'ru'
})