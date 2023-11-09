import { useGLTF, useTexture, Stars } from '@react-three/drei'

export default function MeshGroup4(props) {
    const { nodes } = useGLTF('models/mesh4.glb')
    const bakedTexture = useTexture('textures/bakedMesh4.jpg')
    bakedTexture.flipY = false
    
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
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

useGLTF.preload('models/mesh4.glb')