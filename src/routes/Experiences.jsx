import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import '../style/experiences.css'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    about: "About me",
                    experiences: "Experiences",
                    creative: "Creative developer"
                }
            },
            fr: {
                translation: {
                    about: "À propos de moi",
                    experiences: "Expériences",
                    creative: "Développeur créatif"
                }
            }
        },
        lng: navigator.userLanguage || navigator.language,
        fallbackLng: 'fr',

        interpolation: {
            escapeValue: false
        }
    })



export default function Experiences() {
    const { t } = useTranslation()

    return (
        <div className="experiences">
            <h1 className="experiences-main-title">{t('about')}</h1>
            <div className="experiences-container">
                <div className="experiences-infos experiences-job">
                    <h2 className="experiences-subtitle">{t('experiences')}</h2>

                    <div>
                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t('creative')}</h3>
                            <h4 className="experiences-contract">ZDK Web Agency - Freelance</h4>
                            <p className="experiences-detail">2023 - Aujourd'hui</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Développeur Front-End</h3>
                            <h4 className="experiences-contract">Skilleos - CDD</h4>
                            <p className="experiences-detail">2022 - 2023</p>
                            <p className="experiences-detail">Paris, Île-de-France, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Régisseur des recettes,<br/>Responsable de l'Accueil</h3>
                            <h4 className="experiences-contract">Musée des Beaux-Arts d'Agen - CDD</h4>
                            <p className="experiences-detail">2019 - 2022</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Directeur général</h3>
                            <h4 className="experiences-contract">Troisième Angle - CDI</h4>
                            <p className="experiences-detail">2018 - 2019</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Infographiste</h3>
                            <h4 className="experiences-contract">Maestro Corporation - CDI</h4>
                            <p className="experiences-detail">2017 - 2018</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>
                    </div>

                </div>
                <div className="experiences-infos experiences-formation">
                    <h2 className="experiences-subtitle">Formations</h2>

                    <div>
                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Première Année</h3>
                            <h4 className="experiences-contract">EPITECH</h4>
                            <p className="experiences-detail">2012-2013</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Bachelor Infographie 3D</h3>
                            <h4 className="experiences-contract">Studio M</h4>
                            <p className="experiences-detail">2014-2017</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Certification Développeur Web</h3>
                            <h4 className="experiences-contract">Openclassrooms</h4>
                            <p className="experiences-detail">2022-2023</p>
                            <p className="experiences-detail">Paris, Île-de-France, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">Certification Développeur Three.js</h3>
                            <h4 className="experiences-contract">Three.js Journey</h4>
                            <p className="experiences-detail">2023</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}