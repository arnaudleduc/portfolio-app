import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function MeshGroup1(props) {
    const { nodes } = useGLTF('models/Scene1/mesh1.glb')
    const bakedTexture = useTexture('textures/bakedMesh1.jpg')
    bakedTexture.flipY = false

    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.boardZDK.geometry}
                position={nodes.boardZDK.position}
            >
                <meshStandardMaterial
                    map={bakedTexture}
                    toneMapped={false}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/Scene1/mesh1.glb')