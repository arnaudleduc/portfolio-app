import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export default function NeonMuseum() {
    const { nodes } = useGLTF('models/Scene1/neonMuseum.glb')

    // Make the neon flicker
    const [neonLit, setNeonLit] = useState(true)
    const randomTime = Math.random() * 1000 + 1;

    const changeNeonStatus = () => {
        setNeonLit(!neonLit)
    }

    let t1
    useEffect(() => {
        t1 = setTimeout(changeNeonStatus, randomTime)

        return () => {
            clearTimeout(t1)
        }
    }, [neonLit])

    return (
        <group dispose={null}>
            <mesh  
                geometry={nodes.museumNeon.geometry}
                position={nodes.museumNeon.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={35.30}
                />
            </mesh>
            <mesh   
                geometry={nodes.museumNeonTape.geometry}
                position={nodes.museumNeonTape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}

                />
            </mesh>
            <mesh             
                geometry={nodes.museumNeonE.geometry}
                position={nodes.museumNeonE.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={neonLit ? 35.30 : 0}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/neonMuseum.glb')