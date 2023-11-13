import { useGLTF } from '@react-three/drei'

const BLOOM_FACTOR = 8.008

export default function BoardZDK(props) {
    const { nodes } = useGLTF('models/boardZDK.glb')

    return (
        <group {...props} dispose={null}>
            <mesh


                geometry={nodes.boardZDKText.geometry}
                position={nodes.boardZDKText.position}
            >
                <meshBasicMaterial
                    color={[1 * BLOOM_FACTOR, 1 * BLOOM_FACTOR, 1 * BLOOM_FACTOR]}
                    toneMapped={false}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/boardZDK.glb')