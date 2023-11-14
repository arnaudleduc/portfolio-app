import React, { useRef } from 'react'
import { useGLTF, MeshReflectorMaterial } from '@react-three/drei'

export default function MuseumDoors(props) {
  const { nodes } = useGLTF('models/Scene1/museumDoors.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        
        
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

useGLTF.preload('models/Scene1/museumDoors.glb')