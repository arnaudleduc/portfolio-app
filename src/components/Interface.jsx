import { useEffect, useRef } from "react"
import useScenesStore from "../stores/useScenes"
import useSoundsStore from "../stores/useSounds"
import '../style/interface.css'
import * as THREE from 'three'

const ambienceSound = new Audio('/sounds/synthwaveAmbience.mp3')

export default function Interface() {
    const { isSoundOn, toggleSounds } = useSoundsStore()
    const { scene, started, sceneToMain, setNotStarted } = useScenesStore()

    useEffect(() => {
        if (started) {
            if (isSoundOn) {
                ambienceSound.play()
                ambienceSound.loop = true
            } else if (isSoundOn == false) {
                ambienceSound.pause()
            }
        }

        const soundBars = document.querySelectorAll('.sound-bars-container *')
        const soundBarContainer = document.querySelector('.sound-bars-container')

        const interval = setInterval(() => {
            if (soundBarContainer && isSoundOn) {
                soundBars.forEach((soundBarNumber, index) => {
                    soundBarNumber.style.height = `${Math.floor(Math.random() * 50)}px`
                })
            }
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [started, isSoundOn])

    return (
        <>
            {/* Handle sound */}
            <div className="sound-bars-container" onClick={toggleSounds}>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
                <div className="sound-bars"></div>
            </div>

            {/* Handle go back to main scene */}
            <div className="interface-arrow" onClick={sceneToMain}>
                {
                    scene !== 1
                    &&
                    <img className="interface-arrow-icon" src="./icons/arrow.png" alt="arrow icon" />
                }
            </div>

        </>


    )
}
