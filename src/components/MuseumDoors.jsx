import React, { useRef } from 'react'
import { useGLTF, MeshReflectorMaterial } from '@react-three/drei'

export default function MuseumDoors(props) {
  const { nodes } = useGLTF('models/museumDoors.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.museumDoors.geometry}
        position={nodes.museumDoors.position}
      >
        <meshStandardMaterial
            color={'#cae8eb'}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/museumDoors.glb')