import { useGLTF, useTexture } from '@react-three/drei'

export default function MeshGroup2() {
    const { nodes } = useGLTF('models/Scene1/mesh2.glb')
    const bakedTexture = useTexture('textures/bakedMesh2.jpg')
    bakedTexture.flipY = false

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.buildings.geometry}
                position={nodes.buildings.position}
                >
                <meshStandardMaterial
                    map={bakedTexture}
                    toneMapped={false}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/mesh2.glb')