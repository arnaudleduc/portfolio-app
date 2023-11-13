import { useGLTF, useTexture } from '@react-three/drei'

export default function NeonArcade(props) {
    const neonArcadeEN = useGLTF('models/neonArcadeEN.glb')
    const neonArcadeJP = useGLTF('models/neonArcadeJP.glb')

    return (
        <group {...props} dispose={null}>
            <mesh
                
                
                geometry={neonArcadeEN.nodes.boardArcadeTextEnglish.geometry}
                position={neonArcadeEN.nodes.boardArcadeTextEnglish.position}
            >
                <meshStandardMaterial
                    color={'#2DE2E6'}
                    emissive={'#2DE2E6'}
                    emissiveIntensity={12.71}
                />
            </mesh>
            <mesh
                
                
                geometry={neonArcadeJP.nodes.boardArcadeTextJapanese.geometry}
                position={neonArcadeJP.nodes.boardArcadeTextJapanese.position}
            >
                <meshStandardMaterial
                    color={'#F706CF'}
                    emissive={'#F706CF'}
                    emissiveIntensity={32.25}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('models/neonArcadeEN.glb')
useGLTF.preload('models/neonArcadeJP.glb')