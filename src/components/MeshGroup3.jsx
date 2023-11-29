import { useRef } from 'react'
import { useEffect } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'

export default function MeshGroup3() {
    const bladesGroup = useRef()

    const { nodes } = useGLTF('models/Scene1/mesh3.glb')
    const blades = useGLTF('/models/Scene1/bladesClim.glb')

    const { actions } = useAnimations(blades.animations, bladesGroup)

    useEffect(() => {
        const blade1Animation = actions['PalesAction']
        const blade2Animation = actions['PalesAction.001']
        
        blade1Animation.play()
        blade2Animation.play()

    }, [])

    const bakedTexture = useTexture('textures/bakedMesh3.jpg')
    bakedTexture.flipY = false
    const bakedBladesTexture = useTexture('textures/bakedBlades.jpg')
    bakedTexture.flipY = false

    return (
        <>
            <group dispose={null}>
                <mesh
                    geometry={nodes.bin.geometry}
                    position={nodes.bin.position}
                >
                    <meshStandardMaterial
                        map={bakedTexture}
                    />
                </mesh>
            </group>
            <group ref={bladesGroup} dispose={null}>
                <group name="Scene">
                    <mesh
                        name="airConditioner2Blades"
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

useGLTF.preload('models/Scene1/mesh3.glb')