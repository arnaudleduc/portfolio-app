import { useEffect, useRef, useState } from "react"
import { useGLTF, shaderMaterial, useAnimations } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

import neonMuralVertexShader from '../shaders/ArcadeMuralNeons/vertex.glsl'
import neonMuralFragmentShader from '../shaders/ArcadeMuralNeons/fragment.glsl'

import useArcadeStore from "../stores/useArcade"

export default function Arcade(props) {
    return (
        <group>
            <ArcadeWalls />
            <Arcades />
            <Decoration />
            <Mario />
            <MuralNeons />
            <PacmanNeons />
            <Switch changeColor={props.changeColor} />
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
    const { isCameraZoomed, toggleCameraZoom } = useArcadeStore()
    const arcadeRef = useRef()
    const vec = new THREE.Vector3()
    const { nodes, materials } = useGLTF("/models/Scene3/arcades.glb")

    const toggleCamera = () => {
        toggleCameraZoom()
    }

    useFrame((state) => {
        if (isCameraZoomed) {
            state.camera.lookAt(0, 5.8, -25)
            state.camera.position.lerp(vec.set(0, 13, -10), 0.01)
            state.camera.updateProjectionMatrix()
        } else {
            state.camera.lookAt(0, 5.8, -25)
            state.camera.position.lerp(vec.set(0, 30, 45), 0.01)
            state.camera.updateProjectionMatrix()
        }
        return null
    })

    return (
        <group dispose={null}>
            <group position={[0, 0.069, -22.615]}>
                <mesh
                    ref={arcadeRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.arcade1Material}
                    onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                    onPointerLeave={() => { document.body.style.cursor = 'default' }}
                    onClick={toggleCamera}
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
                    material={materials.aluMaterial}
                />
            </group>
            <group position={[-23.917, 0.069, -20.586]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials.arcade2Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.padMaterials}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials.joystickMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_3.geometry}
                    material={materials.aluMaterial}
                />
            </group>
            <group position={[-25.132, 0.069, -15.993]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials.arcade3Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_1.geometry}
                    material={materials.padMaterials}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_2.geometry}
                    material={materials.joystickMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_3.geometry}
                    material={materials.aluMaterial}
                />
            </group>
            <group position={[23.777, 0.069, -20.851]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials.arcade4Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials.padMaterials}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_2.geometry}
                    material={materials.joystickMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_3.geometry}
                    material={materials.aluMaterial}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials.arcade5Material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005_1.geometry}
                material={materials.padMaterials}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005_2.geometry}
                material={materials.joystickMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005_3.geometry}
                material={materials.aluMaterial}
            />
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
                    material={materials.spaceInvaderMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_1.geometry}
                    material={materials.tetrisSquareMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_2.geometry}
                    material={materials.tetrisVerticalS}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_3.geometry}
                    material={materials.tetrisHorizontalS}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_4.geometry}
                    material={materials.tetrisDownLMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_5.geometry}
                    material={materials.tetrisPurpleMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_6.geometry}
                    material={materials.tetrisDownL}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane017_7.geometry}
                    material={materials.tetrisUpLMaterial}
                />
            </group>
        </group>
    )
}

const Mario = () => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models/Scene3/mario.glb")
    const { actions } = useAnimations(animations, group)
    const marioAnimation = actions['shake']

    const marioHaha = new Audio('./sounds/sm64_mario_haha.wav')
    const marioHurt = new Audio('./sounds/sm64_mario_hurt.wav')
    const marioYahoo = new Audio('./sounds/sm64_mario_yahoo.wav')
    const marioOof = new Audio('./sounds/sm64_mario_oof.wav')
    const marioHoohoo = new Audio('./sounds/sm64_mario_hoohoo.wav')
    const marioSounds = [marioHaha, marioHurt, marioYahoo, marioOof, marioHoohoo]

    const pauseAnimation = () => {
        marioAnimation.stop()
    }

    const onClick = () => {
        let randomMarioSound = Math.round(Math.random() * 4)

        marioAnimation.play()
        marioSounds[randomMarioSound].play()
        setTimeout(pauseAnimation, 1000)
    }

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <mesh
                    name="mario"
                    castShadow
                    receiveShadow
                    geometry={nodes.mario.geometry}
                    material={materials.marioMaterial}
                    position={nodes.mario.position}
                    onClick={onClick}
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
    const [pacman, setPacman] = useState(false)
    const [ghostOrange, setGhostOrange] = useState(false)
    const [ghostPink, setGhostPink] = useState(false)
    const [ghostBlue, setGhostBlue] = useState(false)
    const [ghostRed, setGhostRed] = useState(false)
    const [ghostEyes, setGhostEyes] = useState(false)

    let t1, t2, t3, t4, t5, t6
    useEffect(() => {
        if (!pacman && !ghostOrange && !ghostPink && !ghostBlue && !ghostRed) {
            t1 = setTimeout(() => setPacman(!pacman), 1000)
        }
        if (pacman && !ghostOrange && !ghostPink && !ghostBlue && !ghostRed) {
            t2 = setTimeout(() => setGhostOrange(!ghostOrange), 1000)
        }
        if (pacman && ghostOrange && !ghostPink && !ghostBlue && !ghostRed) {
            t3 = setTimeout(() => setGhostPink(!ghostPink), 1000)
        }
        if (pacman && ghostOrange && ghostPink && !ghostBlue && !ghostRed) {
            t4 = setTimeout(() => setGhostBlue(!ghostBlue), 1000)
        }
        if (pacman && ghostOrange && ghostPink && ghostBlue && !ghostRed) {
            t5 = setTimeout(() => setGhostRed(!ghostRed), 1000)
        }
        if (pacman && ghostOrange && ghostPink && ghostBlue && ghostRed) {
            t6 = setTimeout(() => {
                setPacman(!pacman)
                setGhostOrange(!ghostOrange)
                setGhostPink(!ghostPink)
                setGhostBlue(!ghostBlue)
                setGhostRed(!ghostRed)
            }, 1000)
        }

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
            clearTimeout(t4)
            clearTimeout(t5)
            clearTimeout(t6)
        }


    }, [pacman, ghostOrange, ghostPink, ghostBlue, ghostRed, ghostEyes])

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
                    emissiveIntensity={pacman ? 10 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostOrange.geometry}
                position={nodes.neonGhostOrange.position}
            >
                <meshStandardMaterial
                    color={'#ff6a00'}
                    emissive={'#ff6a00'}
                    emissiveIntensity={ghostOrange ? 30 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostOrangeEyes.geometry}
                position={[9.789, 11.535, -25.065]}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive={'white'}
                    emissiveIntensity={ghostOrange ? 10 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostPink.geometry}
                position={nodes.neonGhostPink.position}
            >
                <meshStandardMaterial
                    color={'#e852ff'}
                    emissive={'#e852ff'}
                    emissiveIntensity={ghostPink ? 30 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostPinkEyes.geometry}
                position={[12.126, 8.835, -25.065]}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive={'white'}
                    emissiveIntensity={ghostPink ? 10 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostBlue.geometry}
                position={nodes.neonGhostBlue.position}
            >
                <meshStandardMaterial
                    color={'#529aff'}
                    emissive={'#529aff'}
                    emissiveIntensity={ghostBlue ? 30 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostBlueEyes.geometry}
                position={[14.412, 6.195, -25.065]}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive={'white'}
                    emissiveIntensity={ghostBlue ? 10 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostRed.geometry}
                position={nodes.neonGhostRed.position}
            >
                <meshStandardMaterial
                    color={'#ff6052'}
                    emissive={'#ff6052'}
                    emissiveIntensity={ghostRed ? 30 : 0}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.neonGhostRedEyes.geometry}
                position={[16.787, 3.452, -25.065]}
            >
                <meshStandardMaterial
                    color={'white'}
                    emissive={'white'}
                    emissiveIntensity={ghostRed ? 10 : 0}
                />
            </mesh>
        </group>
    )
}

const Switch = (props) => {
    const { nodes } = useGLTF("/models/Scene3/switch.glb")
    return (
        <group dispose={null}>
            <mesh
                castShadow
                geometry={nodes["switch"].geometry}
                position={nodes["switch"].position}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
                onClick={props.changeColor}
            >
                <meshStandardMaterial
                    color={'#e6e8d1'}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload("/models/Scene3/walls.glb")
useGLTF.preload("/models/Scene3/arcades.glb")
useGLTF.preload("/models/Scene3/decoration.glb")
useGLTF.preload("/models/Scene3/mario.glb")
useGLTF.preload("/models/Scene3/muralNeons.glb")
useGLTF.preload("/models/Scene3/pacmanNeons.glb")
useGLTF.preload("/models/Scene3/switch.glb")
