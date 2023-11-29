import { useGLTF } from '@react-three/drei'

export default function BuildingsWindows() {
    const { nodes } = useGLTF('models/Scene1/buildingsWindows.glb')

    return (
        <group dispose={null}>
            <mesh
                geometry={nodes.buildingsWindows.geometry}
                position={nodes.buildingsWindows.position}
            >
                <meshStandardMaterial
                    color={'#ff6c11'}
                    emissive="#ff6c11"
                    emissiveIntensity={50}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/buildingsWindows.glb')