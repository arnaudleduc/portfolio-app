import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NeonMuseum(props) {
    const { nodes } = useGLTF('models/neonMuseum.glb')

    // Make the neon flicker
    const [neonLit, setNeonLit] = useState(true)
    const randomTime = Math.random() * 1000 + 1;

    useEffect(() => {
        const changeNeonStatus = () => {
            setNeonLit(!neonLit)
        }

        setTimeout(changeNeonStatus, randomTime)
    }, [neonLit])


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
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonE.geometry}
                position={nodes.museumNeonE.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={neonLit ? 50 : 0}
                    toneMapped={false}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/neonMuseum.glb')