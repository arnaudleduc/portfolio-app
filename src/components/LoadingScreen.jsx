/* eslint-disable react/prop-types */
import { useProgress } from "@react-three/drei";
import useScenesStore from "../stores/useScenes";
import { useTranslation } from "react-i18next";

import "../style/loading-screen.css";

export default function LoadingScreen({ scene }) {
  const { progress } = useProgress();
  const { started, setStarted } = useScenesStore();
  const { t } = useTranslation();

  const openClassicView = () => {
    window.open("https://abandoned-house.vercel.app");
  };

  let content;
  if (scene === "main") {
    content = (
      <div className="loading-screen-board">
        <h1 className="loading-screen-title">ZDK WEB AGENCY</h1>
        <h2 className="loading-screen-subtitle">{t("by")} Arnaud Leduc</h2>
        {!started && (
          <div className="loading-screen-button-container">
            <button
              className="loading-screen-button"
              disabled={progress < 100}
              onClick={setStarted}
            >
              {t("start")}
            </button>

            <button
              className="loading-screen-button"
              disabled={progress < 100}
              onClick={openClassicView}
            >
              {t("mobile")}
            </button>
          </div>
        )}
      </div>
    );
  } else if (scene === "museum") {
    content = (
      <div className="loading-screen-board">
        <h1 className="loading-screen-title">{t("museum")}</h1>
        {!started && (
          <button
            className="loading-screen-button"
            disabled={progress < 100}
            onClick={setStarted}
          >
            {t("click")}
          </button>
        )}
      </div>
    );
  } else if (scene === "arcade") {
    content = (
      <div className="loading-screen-board">
        <h1 className="loading-screen-title">{t("arcade")}</h1>
        {!started && (
          <button
            className="loading-screen-button"
            disabled={progress < 100}
            onClick={setStarted}
          >
            {t("click")}
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`loading-screen ${started ? "loading-screen-started" : ""}`}
    >
      <div className="loading-screen-progress">
        <div
          className="loading-screen-progress-value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      {content}
    </div>
  );
}
