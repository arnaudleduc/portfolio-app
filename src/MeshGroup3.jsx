import React, { useRef } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function MeshGroup3(props) {
    const bladesGroup = useRef()

    const { nodes } = useGLTF('models/mesh3.glb')
    const blades = useGLTF('/models/bladesClim.glb')
    // const bladeGeometry = blades.nodes.

    const { actions } = useAnimations(blades.animations, bladesGroup)
    
    useEffect(() => {
        const blade1Animation = actions['PalesAction']
        const blade2Animation = actions['PalesAction.001']
        const blade3Animation = actions['PalesAction.002']
        blade1Animation.play()
        blade2Animation.play()
        blade3Animation.play()
    }, [])

    const bakedTexture = useTexture('textures/bakedMesh3.jpg')
    bakedTexture.flipY = false
    const bakedBladesTexture = useTexture('textures/bakedBlades.jpg')
    bakedTexture.flipY = false

    return (
        <>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bin.geometry}
                    position={nodes.bin.position}
                >
                    <meshStandardMaterial
                        map={bakedTexture}
                    />
                </mesh>
                <mesh>

                </mesh>
            </group>
            <group ref={bladesGroup} {...props} dispose={null}>
                <group name="Scene">
                    <mesh
                        name="airConditioner1Blades"
                        castShadow
                        receiveShadow
                        geometry={blades.nodes.airConditioner1Blades.geometry}
                        material={blades.nodes.airConditioner1Blades.material}
                        position={blades.nodes.airConditioner1Blades.position}
                    >
                        <meshStandardMaterial
                            map={bakedBladesTexture}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        name="airConditioner2Blades"
                        castShadow
                        receiveShadow
                        geometry={blades.nodes.airConditioner2Blades.geometry}
                        material={blades.nodes.airConditioner2Blades.material}
                        position={blades.nodes.airConditioner2Blades.position}
                    >
                        <meshStandardMaterial
                            map={bakedBladesTexture}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        name="airConditioner3Blades"
                        castShadow
                        receiveShadow
                        geometry={blades.nodes.airConditioner3Blades.geometry}
                        material={blades.nodes.airConditioner3Blades.material}
                        position={blades.nodes.airConditioner3Blades.position}
                    >
                        <meshStandardMaterial
                            map={bakedBladesTexture}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
            </group>
        </>

    )
}

useGLTF.preload('models/mesh3.glb')