import { useEffect, useRef } from "react"
import { SpotLight, useHelper } from "@react-three/drei"
import * as THREE from 'three'

import { useControls } from "leva"

const SPOTLIGHT_INTENSITY = 800

export default function VolumetricSpotlight(props) {
    const spotLight1 = useRef()
    const spotLight2 = useRef()
    const spotLight3 = useRef()
    const spotLight4 = useRef()
    const spotLight5 = useRef()
    const spotLight6 = useRef()
    const spotLight7 = useRef()
    const spotLight8 = useRef()
    // useHelper(spotLight8, THREE.SpotLightHelper, 'red')

    // const { x, y, z } = useControls({
    //     x: 13,
    //     y: 16.75,
    //     z: 13
    // })
    // const { targetX, targetY, targetZ } = useControls({
    //     targetX: 2,
    //     targetY: 0,
    //     targetZ: 16,
    // })

    useEffect(() => {
        spotLight1.current.target.position.set(2, 0, 16)
        spotLight2.current.target.position.set(0, 2.5, 16)
        spotLight3.current.target.position.set(-3, 2, 16)
        spotLight4.current.target.position.set(-18, 0, 0)
        spotLight5.current.target.position.set(-16, 2, 2)
        spotLight6.current.target.position.set(-16, 2, 5)
        spotLight7.current.target.position.set(2, 0, -8)
        spotLight8.current.target.position.set(-2, 0, -8)
    }, [])

    return (
        <>
            <group>
                <SpotLight
                    castShadow
                    ref={spotLight1}
                    position={[13, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={10}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
                <SpotLight
                    castShadow
                    ref={spotLight2}
                    position={[1.7, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={15}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
                <SpotLight
                    castShadow
                    ref={spotLight3}
                    position={[-9.4, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={10}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
            </group>
            <group
                rotation-y={Math.PI * 0.5}
                position={[-26, 0, 0]}
            >
                <SpotLight
                    castShadow
                    ref={spotLight4}
                    position={[13, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={10}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
                <SpotLight
                    castShadow
                    ref={spotLight5}
                    position={[1.7, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={15}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
                <SpotLight
                    castShadow
                    ref={spotLight6}
                    position={[-9.4, 16.75, 13]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={12}
                    anglePower={10}
                    intensity={SPOTLIGHT_INTENSITY}
                    radiusBottom={14.4}
                    opacity={.5}
                    {...props}
                />
            </group>
            <group>
                <SpotLight
                    castShadow
                    ref={spotLight7}
                    position={[15, 12, -20]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={0}
                    anglePower={10}
                    intensity={300}
                    opacity={.5}
                    // volumetric={false}
                    {...props}
                />
                <SpotLight
                    castShadow
                    ref={spotLight8}
                    position={[0, 12, -18]}
                    penumbra={0.8}
                    distance={14}
                    angle={0.8}
                    attenuation={0}
                    anglePower={10}
                    intensity={800}
                    opacity={.5}
                    // volumetric={false}
                    {...props}
                />
            </group>

        </>
    )
}