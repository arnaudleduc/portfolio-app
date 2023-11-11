import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function MeshGroup1(props) {
    const { nodes } = useGLTF('models/mesh1.glb')
    const bakedTexture = useTexture('textures/bakedMesh1.jpg')
    bakedTexture.flipY = false

    return (
        <group {...props} dispose={null}>
            <mesh
                
                
                geometry={nodes.boardZDK.geometry}
                // position={[-1.385, 8.431, -0.999]}
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

useGLTF.preload('models/mesh1.glb')