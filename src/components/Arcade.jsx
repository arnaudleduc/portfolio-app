import React, { useRef } from "react"
import { useGLTF, shaderMaterial, useTexture } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

import neonMuralVertexShader from '../shaders/ArcadeMuralNeons/vertex.glsl'
import neonMuralFragmentShader from '../shaders/ArcadeMuralNeons/fragment.glsl'

export default function Arcade() {
    return (
        <group>
            <ArcadeWalls />
            <Arcades />
            <Decoration />
            <MuralNeons />
            <PacmanNeons />
        </group>
    )
}

const ArcadeWalls = () => {
    const { nodes, materials } = useGLTF("/models/Scene3/walls.glb")
    return (
        <group dispose={null}>
            <group position={[0, 0.005, -0.025]}>
                <mesh
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.wallsMaterial}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.floorMaterial}
                />
            </group>
        </group>
    )
}

const Arcades = () => {
    const { nodes, materials } = useGLTF("/models/Scene3/arcades.glb")
    return (
        <group dispose={null}>
            <group position={[0, 0.069, -22.615]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.arcade1Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.padMaterials}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={materials.joystickMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_3.geometry}
                    material={nodes.Cube_3.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4.geometry}
                    material={materials.aluMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_5.geometry}
                    material={materials.arcade2Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_6.geometry}
                    material={materials.arcade3Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_7.geometry}
                    material={materials.arcade4Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_8.geometry}
                    material={materials.arcade5Material}
                />
            </group>
        </group>
    )
}

const Decoration = () => {
    const { nodes, materials } = useGLTF("/models/Scene3/decoration.glb")
    return (
        <group dispose={null}>
            <group position={[20.101, 10.669, -24.944]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017.geometry}
                    material={materials.marioMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_1.geometry}
                    material={materials.spaceInvaderMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_2.geometry}
                    material={materials.tetrisSquareMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_3.geometry}
                    material={materials.tetrisVerticalS}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_4.geometry}
                    material={materials.tetrisHorizontalS}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_5.geometry}
                    material={materials.tetrisDownLMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_6.geometry}
                    material={materials.tetrisPurpleMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_7.geometry}
                    material={materials.tetrisDownL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_8.geometry}
                    material={materials.tetrisUpLMaterial}
                />
            </group>
        </group>
    )
}


const MuralNeons = () => {
    const { nodes } = useGLTF("/models/Scene3/muralNeons.glb")
    const muralNeonMaterial1 = useRef()
    const muralNeonMaterial2 = useRef()
    const muralNeonMaterial3 = useRef()

    useFrame((state, delta) => {
        muralNeonMaterial1.current.uTime += delta
        muralNeonMaterial2.current.uTime += delta
        muralNeonMaterial3.current.uTime += delta
    })

    const MuralNeonsMaterial1 = shaderMaterial(
        {
            uTime: 0,
            uColor: new THREE.Color('#2de2e6'),
            uWhite: new THREE.Color('#ffffff')
        },
        neonMuralVertexShader,
        neonMuralFragmentShader
    )

    const MuralNeonsMaterial2 = shaderMaterial(
        {
            uTime: 1,
            uColor: new THREE.Color('#f6019d'),
            uWhite: new THREE.Color('#ffffff')
        },
        neonMuralVertexShader,
        neonMuralFragmentShader
    )

    const MuralNeonsMaterial3 = shaderMaterial(
        {
            uTime: 2,
            uColor: new THREE.Color('#023788'),
            uWhite: new THREE.Color('#ffffff')
        },
        neonMuralVertexShader,
        neonMuralFragmentShader
    )

    extend({
        MuralNeonsMaterial1,
        MuralNeonsMaterial2,
        MuralNeonsMaterial3
    })

    return (
        <group dispose={null}>
            <mesh
                castShadow
                geometry={nodes.muralNeon1.geometry}
                position={nodes.muralNeon1.position}
            >
                <muralNeonsMaterial1
                    ref={muralNeonMaterial1}
                />
            </mesh>
            <mesh
                castShadow
                geometry={nodes.muralNeon2.geometry}
                position={nodes.muralNeon2.position}
            >
                <muralNeonsMaterial2
                    ref={muralNeonMaterial2}
                />
            </mesh>
            <mesh
                castShadow
                geometry={nodes.muralNeon3.geometry}
                position={nodes.muralNeon3.position}
            >
                <muralNeonsMaterial3
                    ref={muralNeonMaterial3}
                />
            </mesh>
        </group>
    )
}

const PacmanNeons = () => {
    const { nodes } = useGLTF("/models/Scene3/pacmanNeons.glb")
    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonPacman.geometry}
                position={nodes.neonPacman.position}
            >
                <meshStandardMaterial
                    color={'#fce803'}
                    emissive={'#fce803'}
                    emissiveIntensity={10}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostOrange.geometry}
                position={nodes.neonGhostOrange.position}
            >
                <meshStandardMaterial
                    color={'orange'}
                    emissive={'orange'}
                    emissiveIntensity={30}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostPink.geometry}
                position={nodes.neonGhostPink.position}
            >
                <meshStandardMaterial
                    color={'#ff00e6'}
                    emissive={'#ff00e6'}
                    emissiveIntensity={30}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostBlue.geometry}
                position={nodes.neonGhostBlue.position}
            >
                <meshStandardMaterial
                    color={'blue'}
                    emissive={'blue'}
                    emissiveIntensity={110.6}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostRed.geometry}
                position={nodes.neonGhostRed.position}
            >
                <meshStandardMaterial
                    color={'red'}
                    emissive={'red'}
                    emissiveIntensity={40}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostEyes.geometry}
                position={nodes.neonGhostEyes.position}
                rotation={[0, 0, Math.PI]}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive={'white'}
                    emissiveIntensity={10}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload("/models/Scene3/walls.glb")
useGLTF.preload("/models/Scene3/arcades.glb")
useGLTF.preload("/models/Scene3/decoration.glb")
useGLTF.preload("/models/Scene3/muralNeons.glb")
useGLTF.preload("/models/Scene3/pacmanNeons.glb")
