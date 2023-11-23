import '../style/contact.css'

import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div className='contact-container'>
            <div className='contact'>
                <h1 className='contact-title'>{t("contact")}</h1>
                <h2 className='contact-subtitle'>{t("mission")}</h2>
                <a href='mailto:arnaud.leduc.pro@gmail.com'>
                    <h3 className='contact-mail'>arnaud.leduc.pro@gmail.com</h3>
                </a>
                <h2 className='contact-subtitle'>{t("job")}</h2>
                <a href='mailto:arnaud.leduc3377@gmail.com'>
                    <h3 className='contact-mail'>arnaud.leduc3377@gmail.com</h3>
                </a>
            </div>
        </div>
    )
}
