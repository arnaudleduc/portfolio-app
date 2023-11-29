import { useTranslation } from 'react-i18next'

import '../style/experiences.css'

export default function Experiences() {
    const { t } = useTranslation()

    return (
        <div className="experiences">
            <h1 className="experiences-main-title">{t("about")}</h1>
            <div className="experiences-container">
                <div className="experiences-infos experiences-job">
                    <h2 className="experiences-subtitle">{t("experiences")}</h2>

                    <div>
                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("creative")}</h3>
                            <h4 className="experiences-contract">ZDK Web Agency - Freelance</h4>
                            <p className="experiences-detail">2023 - {t("today")}</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("frontend")}</h3>
                            <h4 className="experiences-contract">Skilleos - {t("fixed-term-contract")}</h4>
                            <p className="experiences-detail">2022 - 2023</p>
                            <p className="experiences-detail">Paris, Île-de-France, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("revenue")},<br/>{t("frontdesk")}</h3>
                            <h4 className="experiences-contract">Musée des Beaux-Arts d'Agen - {t("fixed-term-contract")}</h4>
                            <p className="experiences-detail">2019 - 2022</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("ceo")}</h3>
                            <h4 className="experiences-contract">Troisième Angle - {t("permanent-contract")}</h4>
                            <p className="experiences-detail">2018 - 2019</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("designer")}</h3>
                            <h4 className="experiences-contract">Maestro Corporation - {t("permanent-contract")}</h4>
                            <p className="experiences-detail">2017 - 2018</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>
                    </div>
                </div>
                
                <div className="experiences-infos experiences-formation">
                    <h2 className="experiences-subtitle">{t("education")}</h2>

                    <div>
                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("first")}</h3>
                            <h4 className="experiences-contract">EPITECH</h4>
                            <p className="experiences-detail">2012-2013</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("bachelor")}</h3>
                            <h4 className="experiences-contract">Studio M</h4>
                            <p className="experiences-detail">2014-2017</p>
                            <p className="experiences-detail">Toulouse, Occitanie, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("web")}</h3>
                            <h4 className="experiences-contract">Openclassrooms</h4>
                            <p className="experiences-detail">2022-2023</p>
                            <p className="experiences-detail">Paris, Île-de-France, France</p>
                        </div>

                        <div className="experiences-infos-container">
                            <h3 className="experiences-title">{t("three")}</h3>
                            <h4 className="experiences-contract">Three.js Journey</h4>
                            <p className="experiences-detail">2023</p>
                            <p className="experiences-detail">Agen, Nouvelle-Aquitaine, France</p>
                        </div>

                        <h2 className="experiences-subtitle experiences-back">{t("return")}</h2>
                    </div>
                </div>
            </div>

        </div>

    )
}