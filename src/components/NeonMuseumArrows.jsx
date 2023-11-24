import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function NeonMuseumArrows(props) {
    const { nodes } = useGLTF('models/Scene1/neonMuseumArrows.glb')
    const neonArrowsEmissiveIntensity = 35.30

    // Make the arrow blink
    const [arrowPart1, setArrowPart1] = useState(false)
    const [arrowPart2, setArrowPart2] = useState(false)
    const [arrowPart3, setArrowPart3] = useState(false)

    let t1, t2, t3, t4
    useEffect(() => {
        if (!arrowPart1 && !arrowPart2 && !arrowPart3) {
            t1 = setTimeout(() => setArrowPart1(!arrowPart1), 1000)
        }
        if (arrowPart1 && !arrowPart2 && !arrowPart3) {
            t2 = setTimeout(() => setArrowPart2(!arrowPart2), 1000)
        }
        if (arrowPart1 && arrowPart2 && !arrowPart3) {
            t3 = setTimeout(() => setArrowPart3(!arrowPart3), 1000)
        }
        if (arrowPart1 && arrowPart2 && arrowPart3) {
            t4 = setTimeout(() => {
                setArrowPart1(!arrowPart1)
                setArrowPart2(!arrowPart2)
                setArrowPart3(!arrowPart3)
            }, 1000)
        }

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
            clearTimeout(t4)
        }

    }, [arrowPart1, arrowPart2, arrowPart3])

    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.museumNeonArrow3.geometry}
                position={nodes.museumNeonArrow3.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart1 ? neonArrowsEmissiveIntensity : 0}
                />
            </mesh>
            <mesh
                geometry={nodes.museumNeonArrow2.geometry}
                position={nodes.museumNeonArrow2.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart2 ? neonArrowsEmissiveIntensity : 0}
                />
            </mesh>
            <mesh
                geometry={nodes.museumNeonArrow1.geometry}
                position={nodes.museumNeonArrow1.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart3 ? neonArrowsEmissiveIntensity : 0}
                />
            </mesh>
            <mesh
                geometry={nodes.museumNeonArrow3Tape.geometry}
                position={nodes.museumNeonArrow3Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
            <mesh
                geometry={nodes.museumNeonArrow2Tape.geometry}
                position={nodes.museumNeonArrow2Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
            <mesh
                geometry={nodes.museumNeonArrow1Tape.geometry}
                position={nodes.museumNeonArrow1Tape.position}
            >
                <meshStandardMaterial
                    color={'#000000'}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/neonMuseumArrows.glb')