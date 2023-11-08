import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function NeonMuseumArrows(props) {
    const { nodes } = useGLTF('models/neonMuseumArrows.glb')
    const neonArrowsEmissiveIntensity = 40

    // Make the arrow blink
    const [arrowPart1Lit, setArrowPart1Lit] = useState(true)
    const [arrowPart2Lit, setArrowPart2Lit] = useState(true)
    const [arrowPart3Lit, setArrowPart3Lit] = useState(true)

    useEffect(() => {
        // let delay = 1000
        // const changeArrowPart1Status = () => {
        //     setArrowPart1Lit(!arrowPart1Lit)
        //     console.log('arrow1', arrowPart1Lit);
        // }
        // const changeArrowPart2Status = () => {
        //     setArrowPart2Lit(!arrowPart2Lit)
        //     console.log('arrow2', arrowPart2Lit);
        // }
        // const changeArrowPart3Status = () => {
        //     setArrowPart3Lit(!arrowPart3Lit)
        //     console.log('arrow3', arrowPart3Lit);
        // }
        // const functionArray = [changeArrowPart1Status, changeArrowPart2Status, changeArrowPart3Status]
        // for(let i = 0; i < functionArray.length + 1; i++) {
        //     let interval = delay + i;
        //     (function (i, interval) {
        //         setInterval(function() {
        //             functionArray[i].call(this, interval)
        //         }, interval)
        //     }(i, interval))
        // }
    })

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow3.geometry}
                position={nodes.museumNeonArrow3.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart1Lit ? neonArrowsEmissiveIntensity : 0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow2.geometry}
                position={nodes.museumNeonArrow2.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart2Lit ? neonArrowsEmissiveIntensity : 0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow1.geometry}
                position={nodes.museumNeonArrow1.position}
            >
                <meshStandardMaterial
                    color={'#FD9DAC'}
                    emissive={'#FD1D53'}
                    emissiveIntensity={arrowPart3Lit ? neonArrowsEmissiveIntensity : 0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.museumNeonArrow3Tape.geometry}
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