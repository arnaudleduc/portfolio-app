import { useGLTF, useTexture } from '@react-three/drei'

export default function MeshGroup4() {
    const { nodes } = useGLTF('models/Scene1/mesh4.glb')
    const bakedTexture = useTexture('textures/bakedMesh4.jpg')
    bakedTexture.flipY = false

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.electricPole.geometry}
                material={nodes.electricPole.material}
                position={nodes.electricPole.position}
            >
                <meshStandardMaterial
                    map={bakedTexture}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/mesh4.glb')