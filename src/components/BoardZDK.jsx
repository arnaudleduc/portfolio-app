import { useGLTF } from '@react-three/drei'

export default function BoardZDK(props) {
    const { nodes } = useGLTF('models/boardZDK.glb')

    return (
        <group {...props} dispose={null}>
            <mesh
                
                
                geometry={nodes.boardZDKText.geometry}
                position={nodes.boardZDKText.position}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive="white"
                    emissiveIntensity={4.724}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/boardZDK.glb')