import "../style/classic-display.css";
import { useTranslation } from "react-i18next";

export default function ClassicDisplay() {
  const { t } = useTranslation();

  return (
    <div className="classic-display">
      <h1>Arnaud LEDUC</h1>
      <h2>{t("creative")}</h2>
      <p>{t("pitch")}</p>

      <h3>CONTACT</h3>
      <ul className="classic-display-list-container">
        <li>
          <a href="https://twitter.com/LeBigTesti">TWITTER</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arnaudleduc/">LINKEDIN</a>
        </li>
        <li>
          <a href="https://github.com/arnaudleduc">GITHUB</a>
        </li>
        <li>
          <a href="mailto:arnaud.leduc3377@gmail.com">EMAIL ADDRESS</a>
        </li>
      </ul>

      <h3>{t("experiences")}</h3>
      <h4>
        {t("freelance")} <span>{t("at")} </span>ZDK WEB AGENCY
      </h4>
      <p>
        2023<span>&gt;</span>
        {t("today")}
      </p>
      <h4>
        {t("frontend")} <span>{t("at")} </span>SKILLEOS
      </h4>
      <p>
        2022<span>&gt;</span>2023
      </p>
      <h4>
        {t("designer")} <span>{t("at")} </span>TROISIEME ANGLE
      </h4>
      <p>
        2018<span>&gt;</span>2019
      </p>
      <h4>
        {t("designer")} <span>{t("at")} </span>MAESTRO CORP.
      </h4>
      <p>
        2017<span>&gt;</span>2018
      </p>

      <h3>{t("projects")}</h3>
      <h4>{t("immersive")}</h4>
      <ul className="classic-display-list-container immersive-websites">
        <li>
          <a href="https://abandoned-house.vercel.app/">
            (NOT SO) ABANDONED HOUSE
          </a>
        </li>
        <li>
          <a href="https://zdk-web-agency.vercel.app/">ZDK WEB AGENCY</a>
        </li>
      </ul>
      <h4>{t("common")}</h4>
      <ul className="classic-display-list-container">
        <li>
          <a href="https://www.skilleos.com/">SKILLEOS</a>
        </li>
      </ul>
      <h4>{t("design")}</h4>
      <ul className="classic-display-list-container">
        {/* <li>
          <a href="https://www.behance.net/arnaudleduc">BEHANCE</a>
        </li> */}
        <li>
          <a href="https://www.artstation.com/zdk">ARTSTATION</a>
        </li>
      </ul>
    </div>
  );
}
