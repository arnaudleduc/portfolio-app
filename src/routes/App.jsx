import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import LoadingScreen from '../components/LoadingScreen'

export default function App() {
    const [start, setStart] = useState(false)

    return (
        <>
            <Canvas
                camera={{
                    fov: 15,
                    near: 0.1,
                    far: 500,
                    position: [-32, 26, 32]
                }}
            >
                {/* Controls */}
                <OrbitControls
                    minDistance={40}
                    maxDistance={50}
                    minPolarAngle={(Math.PI / 2) - 1}
                    maxPolarAngle={(Math.PI / 2) - 0.43}
                    minAzimuthAngle={-((Math.PI) - 2.1)}
                    maxAzimuthAngle={-((Math.PI) + 3.5)}
                    target={[0, 4.3, 0]}
                    enablePan={false}
                // enableZoom={false}
                />
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
                <ambientLight intensity={0.6} />

                {/* Scene */}
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
            <LoadingScreen started={start} onStarted={() => setStart(true)} />
        </>
    )
}