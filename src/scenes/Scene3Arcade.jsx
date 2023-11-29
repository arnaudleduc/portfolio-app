import { useRef, useState } from "react"
import { PerspectiveCamera, Sparkles } from "@react-three/drei"
// import { Perf } from "r3f-perf"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

import Arcade from "../components/Arcade"
import IFrame from "../components/IFrame"

import useArcadeStore from "../stores/useArcade"
import useScenesStore from "../stores/useScenes"


export default function Scene3Arcade() {
    const mainCamera = useRef()
    const cameraGroup = useRef()
    const sparkles = useRef()
    const { started } = useScenesStore()
    const [ambienceColor, setAmbienceColor] = useState('#fd3777')
    // useHelper(mainCamera, THREE.CameraHelper, 'red')
    
    return (
        <>
            {/* <Perf
                position="top-left"
            /> */}
            <group ref={cameraGroup}>
                <PerspectiveCamera
                    ref={mainCamera}
                    makeDefault
                    near={0.1}
                    far={170}
                    fov={17}
                    position={[0, 30, 45]}
                />
            </group>

            <EffectComposer>
                <Bloom
                    intensity={0.1}
                    luminanceThreshold={8}
                />
            </EffectComposer >
            <directionalLight
                color={ambienceColor}
                intensity={8}
            />
            <Sparkles
                ref={sparkles}
                count={150}
                position={[0, 7, -7]}
                size={7}
                scale={[40, 15, 20]}
                speed={0.8}
                color={ambienceColor}
                opacity={0.8}
            />
            <Arcade changeColor={() => ambienceColor === '#2de2e6' ? setAmbienceColor('#fd3777') : setAmbienceColor('#2de2e6')} />
            <IFrame started={started} page="experiences" />
        </>

    )
}