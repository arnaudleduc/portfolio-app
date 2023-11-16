import { useRef, useEffect } from "react"
import { OrbitControls, useHelper, PerspectiveCamera, Sparkles } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from 'three'

import Arcade from "../components/Arcade"

export default function Scene3Arcade() {
    const mainCamera = useRef()
    const cameraGroup = useRef()

    // useHelper(mainCamera, THREE.CameraHelper, 'red')

    useEffect(() => {
        mainCamera.current.lookAt(0, 12, 5)
    }, [])

    return (
        <>
            <group ref={cameraGroup}>
                <PerspectiveCamera
                    ref={mainCamera}
                    makeDefault
                    near={0.1}
                    far={170}
                    fov={17}
                    position={[0, 20, 45]}
                />
            </group>
            {/* <OrbitControls /> */}

            <EffectComposer>
                <Bloom
                    intensity={0.1}
                    luminanceThreshold={8}
                />
            </EffectComposer >
            <directionalLight
                color={'#fd3777'}
                // color={'#2de2e6'}
                intensity={8}
            />
            <Sparkles
                count={150}
                position={[0, 7, -10]}
                size={7}
                scale={[40, 15, 20]}
                speed={0.8}
                color={'#fd3777'}
                opacity={.8}
            />
            <Arcade />
        </>

    )
}