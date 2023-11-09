import useSoundsStore from "../stores/useSounds"
import '../style/interface.css'

export default function Interface() {
    const { isSoundOn, toggleSounds } = useSoundsStore()
    const toggleSoundOnOff = () => {
        toggleSounds()
    }

    return (
        // Handle sound
        <div className="interface-sound" onClick={toggleSoundOnOff}>
            {
                isSoundOn ?
                    <img className="interface-sound-icon" src="./icons/volume_orange.png" alt="sound icon" />
                    :
                    <img className="interface-sound-icon" src="./icons/volume_off_orange.png" alt="sound icon" />
            }
        </div>
    )
}