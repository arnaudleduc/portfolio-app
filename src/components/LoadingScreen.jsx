import { useProgress } from '@react-three/drei'
import '../style/loading-screen.css'
import useScenesStore from '../stores/useScenes'
import { useTranslation } from 'react-i18next'


export default function LoadingScreen({ scene }) {
    const { progress } = useProgress()
    const { started, setStarted } = useScenesStore()
    const { t } = useTranslation()

    const startExperience = () => {
        setStarted()
    }

    let content
    if (scene === "main") {
        content = <div className='loading-screen-board'>
            <h1 className='loading-screen-title'>ZDK WEB AGENCY</h1>
            <h2 className='loading-screen-subtitle'>{t("by")} Arnaud Leduc</h2>
            {!started && <button
                className='loading-screen-button'
                disabled={progress < 100}
                onClick={startExperience}
            >
                {t("start")}
            </button>}
        </div>
    } else if (scene === "museum") {
        content = <div className='loading-screen-board'>
            <h1 className='loading-screen-title'>{t("museum")}</h1>
            {!started && <button
                className='loading-screen-button'
                disabled={progress < 100}
                onClick={startExperience}
            >
                {t("click")}
            </button>}
        </div>
    } else if (scene === "arcade") {
        content = <div className='loading-screen-board'>
            <h1 className='loading-screen-title'>{t("arcade")}</h1>
            {!started && <button
                className='loading-screen-button'
                disabled={progress < 100}
                onClick={startExperience}
            >
                {t("click")}
            </button>}
        </div>
    }

    return (
        <div className={`loading-screen ${started ? 'loading-screen-started' : ''}`}>
            <div className='loading-screen-progress'>
                <div
                    className='loading-screen-progress-value'
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            {content}
        </div>
    )
} 