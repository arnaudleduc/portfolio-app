import { useEffect, useState } from "react"
import useScenesStore from "../stores/useScenes"
import useSoundsStore from "../stores/useSounds"
import '../style/interface.css'
import * as THREE from 'three'
import { context } from "@react-three/fiber"

const ambienceSound = new Audio('/sounds/synthwaveAmbience.mp3')

export default function Interface() {
    const { isSoundOn, toggleSounds } = useSoundsStore()
    const { scene, started, sceneToMain, setNotStarted } = useScenesStore()

    const backToMainScene = () => {
        sceneToMain()
    }


    useEffect(() => {
        if (started) {
            if (isSoundOn) {
                ambienceSound.play()
                ambienceSound.loop = true
            } else if (isSoundOn == false) {
                ambienceSound.pause()
            }
        }

        const interval = setInterval(() => {
            const soundBarContainer = document.querySelector('.sound-bars-container')
            const soundBar1 = document.querySelector('.sound-bars-1')
            const soundBar2 = document.querySelector('.sound-bars-2')
            const soundBar3 = document.querySelector('.sound-bars-3')
            const soundBar4 = document.querySelector('.sound-bars-4')
            const soundBar5 = document.querySelector('.sound-bars-5')
            const soundBar6 = document.querySelector('.sound-bars-6')
            const soundBar7 = document.querySelector('.sound-bars-7')
            const soundBar8 = document.querySelector('.sound-bars-8')
            if (soundBarContainer && isSoundOn) {
                const random1 = Math.floor(Math.random() * 50)
                const random2 = Math.floor(Math.random() * 50)
                const random3 = Math.floor(Math.random() * 50)
                const random4 = Math.floor(Math.random() * 40)
                const random5 = Math.floor(Math.random() * 40)
                const random6 = Math.floor(Math.random() * 40)
                const random7 = Math.floor(Math.random() * 30)
                const random8 = Math.floor(Math.random() * 30)
                soundBar1.style.height = `${random1}px`
                soundBar2.style.height = `${random2}px`
                soundBar3.style.height = `${random3}px`
                soundBar4.style.height = `${random4}px`
                soundBar5.style.height = `${random5}px`
                soundBar6.style.height = `${random6}px`
                soundBar7.style.height = `${random7}px`
                soundBar8.style.height = `${random8}px`
            }
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [started, isSoundOn])

    return (
        <>
            {/* Handle sound */}
            {/* <div className="interface-sound" onClick={() => toggleSounds()}>
                {
                    isSoundOn ?
                        <img className="interface-sound-icon" src="./icons/volume_orange.png" alt="sound icon" />
                        :
                        <img className="interface-sound-icon" src="./icons/volume_off_orange.png" alt="sound icon" />
                }
            </div> */}
            <div className="sound-bars-container" onClick={toggleSounds}>
                <div className="sound-bars-1"></div>
                <div className="sound-bars-2"></div>
                <div className="sound-bars-3"></div>
                <div className="sound-bars-4"></div>
                <div className="sound-bars-5"></div>
                <div className="sound-bars-6"></div>
                <div className="sound-bars-7"></div>
                <div className="sound-bars-8"></div>
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
