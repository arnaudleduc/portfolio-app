import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function MeshGroup2(props) {
    const { nodes } = useGLTF('models/mesh2.glb')
    const bakedTexture = useTexture('textures/bakedMesh2.jpg')
    bakedTexture.flipY = false

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.buildings.geometry}
                position={nodes.buildings.position}
                >
                <meshStandardMaterial
                    map={bakedTexture}
                    toneMapped={false}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/mesh2.glb')