import { useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

import Arcade from "../components/Arcade"

export default function Scene3Arcade() {
    // const mainCamera = useRef()
    // const cameraGroup = useRef()

    return (
        <>
            <OrbitControls />

            <EffectComposer>
                <Bloom
                    intensity={0.1}
                    luminanceThreshold={8}
                />
            </EffectComposer >
            <Arcade />
        </>

    )
}