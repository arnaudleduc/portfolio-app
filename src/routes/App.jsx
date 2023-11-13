import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import LoadingScreen from '../components/LoadingScreen'
import useSoundsStore from '../stores/useSounds'
import Interface from '../components/Interface'

const ambienceSound = new Audio('./sounds/synthwaveAmbience.mp3')

export default function App() {
    const [start, setStart] = useState(false)
    const {isSoundOn } = useSoundsStore()


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

                {/* Scene Set up */}
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

                {/* Scene */}
                <Suspense fallback={null}>
                    <Experience started={start}/>
                </Suspense>
            </Canvas>
            <Interface />
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    )
}