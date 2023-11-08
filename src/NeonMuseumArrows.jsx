import { useGLTF } from '@react-three/drei'

export default function NeonMuseumArrows(props) {
    const { nodes, materials } = useGLTF('models/neonMuseumArrows.glb')
    const neonArrowsEmissiveIntensity = 40

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow3.geometry}
                material={nodes.museumNeonArrow3.material}
                position={nodes.museumNeonArrow3.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={neonArrowsEmissiveIntensity}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow2.geometry}
                material={nodes.museumNeonArrow2.material}
                position={nodes.museumNeonArrow2.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={neonArrowsEmissiveIntensity}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow1.geometry}
                material={nodes.museumNeonArrow1.material}
                position={nodes.museumNeonArrow1.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={neonArrowsEmissiveIntensity}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow3Tape.geometry}
                material={nodes.museumNeonArrow3Tape.material}
                position={nodes.museumNeonArrow3Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow2Tape.geometry}
                material={nodes.museumNeonArrow2Tape.material}
                position={nodes.museumNeonArrow2Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow1Tape.geometry}
                material={nodes.museumNeonArrow1Tape.material}
                position={nodes.museumNeonArrow1Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/neonMuseumArrows.glb')