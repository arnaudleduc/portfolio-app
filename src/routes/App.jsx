import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene1Street from '../scenes/Scene1Street'
import Scene2Museum from '../scenes/Scene2Museum'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import LoadingScreen from '../components/LoadingScreen'
import useSoundsStore from '../stores/useSounds'
import Interface from '../components/Interface'

const ambienceSound = new Audio('./sounds/synthwaveAmbience.mp3')

export default function App() {
    const [start, setStart] = useState(false)
    const [scene, setScene] = useState(2)
    const { isSoundOn } = useSoundsStore()

    useEffect(() => {
        if (start) {
            if (isSoundOn === true) {
                ambienceSound.play()
                ambienceSound.loop = true
            } else if (isSoundOn == false) {
                ambienceSound.pause()
            }
        }
    }, [start, isSoundOn])

    return (
        <>
            <Canvas>
                <Perf
                    position='top-left'
                />
            {scene === 1 ? displayScene1(start) : displayScene2()}
            </Canvas>
            <Interface />
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    )
}

const displayScene1 = (start) => {
    return (
        <>
            <Environment
                background
                files={[
                    'textures/envMap/px.png',
                    'textures/envMap/nx.png',
                    'textures/envMap/py.png',
                    'textures/envMap/ny.png',
                    'textures/envMap/pz.png',
                    'textures/envMap/nz.png',
                ]}
                blur={0.8}
            />
            <ambientLight intensity={1.4} />
            <Suspense fallback={null}>
                <Scene1Street started={start} />
            </Suspense>
        </>
    )
}

const displayScene2 = () => {
    return (
        <>
            {/* <Environment
                background
                files={[
                    'textures/envMap/px.png',
                    'textures/envMap/nx.png',
                    'textures/envMap/py.png',
                    'textures/envMap/ny.png',
                    'textures/envMap/pz.png',
                    'textures/envMap/nz.png',
                ]}
                blur={0.8}
            /> */}
            <color args={['#000000']} attach="background" />
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
                <Scene2Museum />
            </Suspense>
        </>
    )
}