import '../style/contact.css'
import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

// TODO: Export this in json
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    contact: "Contact me !",
                    mission: "A ponctual mission ?",
                    job: "A job offer ?",
                }
            },
            fr: {
                translation: {
                    contact: "Contactez moi !",
                    mission: "Une mission ponctuelle ?",
                    job: "Une offre d'emploi ?",
                }
            }
        },
        lng: navigator.userLanguage || navigator.language,
        fallbackLng: 'fr',

        interpolation: {
            escapeValue: false
        }
    })

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div className='contact-container'>
            <div className='contact'>
                <h1 className='contact-title'>{t('contact')}</h1>
                <h2 className='contact-subtitle'>{t('mission')}</h2>
                <a href='mailto:arnaud.leduc.pro@gmail.com'>
                    <h3 className='contact-mail'>arnaud.leduc.pro@gmail.com</h3>
                </a>
                <h2 className='contact-subtitle'>{t('job')}</h2>
                <a href='mailto:arnaud.leduc3377@gmail.com'>
                    <h3 className='contact-mail'>arnaud.leduc3377@gmail.com</h3>
                </a>
            </div>
        </div>
    )
}
