import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Environment, OrbitControls } from '@react-three/drei'

export default function App() {
    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [- 4, 3, 6]
            }}
        >
            {/* Controls */}
            <OrbitControls />

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
            <ambientLight intensity={5}/>

            {/* Scene */}
            <Experience />
        </Canvas>
    )
}