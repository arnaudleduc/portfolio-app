import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NeonMuseum(props) {
    const { nodes } = useGLTF('models/neonMuseum.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeon.geometry}
                position={nodes.museumNeon.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={50}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonTape.geometry}
                position={nodes.museumNeonTape.position}
                >
                <meshStandardMaterial
                    color={'#000000'}
                    
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/neonMuseum.glb')