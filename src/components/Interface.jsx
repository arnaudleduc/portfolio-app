import useScenesStore from "../stores/useScenes"
import useSoundsStore from "../stores/useSounds"
import '../style/interface.css'

export default function Interface() {
    const { isSoundOn, toggleSounds } = useSoundsStore()
    const { scene, sceneToMain, setNotStarted } = useScenesStore()

    const toggleSoundOnOff = () => {
        toggleSounds()
    }

    const backToMainScene = () => {
        sceneToMain()
    }

    return (
        <>
            {/* Handle sound */}
            <div className="interface-sound" onClick={toggleSoundOnOff}>
                {
                    isSoundOn ?
                        <img className="interface-sound-icon" src="./icons/volume_orange.png" alt="sound icon" />
                        :
                        <img className="interface-sound-icon" src="./icons/volume_off_orange.png" alt="sound icon" />
                }
            </div>

            {/* Handle go back to main scene */}
            <div className="interface-arrow" onClick={backToMainScene}>
                {
                    scene !== 1
                    &&
                    <img className="interface-arrow-icon" src="./icons/arrow.png" alt="arrow icon" />
                }
            </div>

        </>


    )
}