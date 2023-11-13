import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function NeonMuseumArrows(props) {
    const { nodes } = useGLTF('models/neonMuseumArrows.glb')
    const neonArrowsEmissiveIntensity = 35.30

    // Make the arrow blink
    const [arrowPart1, setArrowPart1] = useState(false)
    const [arrowPart2, setArrowPart2] = useState(false)
    const [arrowPart3, setArrowPart3] = useState(false)

    useEffect(() => {
        // let delay = 1000
        const changeArrowPart1Status = () => {
            setArrowPart1(!arrowPart1)
        }
        const changeArrowPart2Status = () => {
            setArrowPart2(!arrowPart2)
        }
        const changeArrowPart3Status = () => {
            setArrowPart3(!arrowPart3)
        }

        if (!arrowPart1 && !arrowPart2 && !arrowPart3) {
            setTimeout(changeArrowPart1Status, 1000)
        }
        if (arrowPart1 && !arrowPart2 && !arrowPart3) {
            setTimeout(changeArrowPart2Status, 1000)
        }
        if (arrowPart1 && arrowPart2 && !arrowPart3) {
            setTimeout(changeArrowPart3Status, 1000)
        }
        if (arrowPart1 && arrowPart2 && arrowPart3) {
            setTimeout(() => {
                changeArrowPart1Status()
                changeArrowPart2Status()
                changeArrowPart3Status()
            }, 1000)
        }
    })

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

useGLTF.preload('models/neonMuseumArrows.glb')