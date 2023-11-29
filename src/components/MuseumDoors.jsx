import { useGLTF } from '@react-three/drei'

export default function MuseumDoors() {
  const { nodes } = useGLTF('models/Scene1/museumDoors.glb')

  return (
    <group dispose={null}>
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