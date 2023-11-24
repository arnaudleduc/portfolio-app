import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene1Street from '../scenes/Scene1Street'
import Scene2Museum from '../scenes/Scene2Museum'
import Scene3Arcade from '../scenes/Scene3Arcade'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import LoadingScreen from '../components/LoadingScreen'
import useSoundsStore from '../stores/useSounds'
import Interface from '../components/Interface'
import useScenesStore from '../stores/useScenes'

const ambienceSound = new Audio('./sounds/synthwaveAmbience.mp3')

export default function App() {
    const { scene, started } = useScenesStore()
    const { isSoundOn } = useSoundsStore()

    useEffect(() => {
        if (started) {
            if (isSoundOn === true) {
                ambienceSound.play()
                ambienceSound.loop = true
            } else if (isSoundOn == false) {
                ambienceSound.pause()
            }
        }
    }, [started, isSoundOn])

    if (scene === 1) {
        return (
            <>
                <Canvas
                    shadows
                >

                    <Perf
                        position='top-left'
                    />
                    {displayScene1(started)}
                </Canvas>
                <Interface />
                <LoadingScreen scene="main" />
            </>
        )
    } else if (scene === 2) {
        return (
            <>
                <Canvas
                    shadows
                >

                    <Perf
                        position='top-left'
                    />
                    {displayScene2()}
                </Canvas>
                <Interface />
                <LoadingScreen scene="museum" />
            </>
        )
    } else {
        return (
            <>
                <Canvas
                    shadows
                >

                    {/* <Perf
                        position='top-left'
                    /> */}
                    {displayScene3()}
                </Canvas>
                <Interface />
                <LoadingScreen scene="arcade" />
            </>
        )
    }
}

const displayScene1 = (started) => {
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
                <Scene1Street started={started} />
            </Suspense>
        </>
    )
}

const displayScene2 = () => {
    return (
        <>
            <color args={['#000000']} attach="background" />
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
                <Scene2Museum />
            </Suspense>
        </>
    )
}

const displayScene3 = () => {
    return (
        <>
            <color args={['#000000']} attach="background" />
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
                <Scene3Arcade />
            </Suspense>
        </>
    )
}