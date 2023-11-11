import { useGLTF, useTexture, MeshReflectorMaterial } from '@react-three/drei'

export default function Puddle(props) {
    const { nodes } = useGLTF('models/puddle.glb')
    const puddleAlphaMap = useTexture('textures/puddleAlpha.jpg')

    return (
        <group {...props} dispose={null}>
            <mesh rotation-x={-Math.PI*0.5} position={[-0.5, 0.15, 0]}  >
                <planeGeometry args={[3, 3]}/>
                <MeshReflectorMaterial
                    envMapIntensity={1}
                    color={[0.015, 0.015, 0.015]}
                    roughness={0.7}
                    blur={[1000, 1000]}
                    mixBlur={20}
                    mixStrength={80}
                    mixContrast={1}
                    resolution={2048}
                    mirror={0.8}
                    depthScale={0.01}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1}
                    depthToBlurRatioBias={0.25}
                    debug={0}
                    reflectorOffset={0.2}
                    alphaMap={puddleAlphaMap}
                    transparent
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/puddle.glb')