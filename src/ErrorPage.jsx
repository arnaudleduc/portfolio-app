import { useRouteError } from "react-router-dom"
import { useTranslation } from "react-i18next"

import './style/loading-screen.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  const { t } = useTranslation()

  return (
    <div className="error-page">
      <h1>{t("oops")}</h1>
      <p>{t("error")}</p>
      <a href="/">
        <button>
        {t("backToMain")}
        </button>
      </a>

    </div>
  )
}