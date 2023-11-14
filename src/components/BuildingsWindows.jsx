import { useGLTF } from '@react-three/drei'

export default function BuildingsWindows(props) {
    const { nodes } = useGLTF('models/Scene1/buildingsWindows.glb')

    return (
        <group {...props} dispose={null}>
            <mesh
                
                
                geometry={nodes.buildingsWindows.geometry}
                position={nodes.buildingsWindows.position}
            >
                <meshStandardMaterial
                    color={'#ff6c11'}
                    emissive="#ff6c11"
                    emissiveIntensity={24.49}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/buildingsWindows.glb')