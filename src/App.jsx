import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function App() {
    return (
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
                target={[0, 4.3, 0]}
                // enablePan={false}
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
            <ambientLight intensity={0.6}/>

            {/* Scene */}
            <Experience />
        </Canvas>
    )
}