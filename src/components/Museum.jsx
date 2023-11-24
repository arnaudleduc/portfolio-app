import { useRef, useState } from "react"
import { useGLTF, useHelper, useTexture, Sparkles, Html } from "@react-three/drei"
import VolumetricSpotlight from "./VolumetricSpotLight"
import * as THREE from 'three'

import '../style/question-marks.css'
import useScenesStore from "../stores/useScenes"

export default function Museum() {
    return (
        <group scale={0.62}>
            <MuseumMesh />
            <Decoration />
            <CopperMeshes />
            <SilverMeshes />
            <GoldMeshes />
            <Paintings />
            <QuestionMarks />
        </group>
    )
}

const MuseumMesh = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/museumMeshes.glb")
    return (
        <>
            <group dispose={null}>
                <mesh
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.wallsMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials.spotsMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials.ropeMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_3.geometry}
                    material={materials.goldMaterial}
                />
            </group>
            <VolumetricSpotlight

                color={'#f7d081'}
            />
            <Sparkles
                count={100}
                position={[2.5, 8, 15]}
                size={5}
                scale={[25, 15, 5]}
                speed={0.2}
            />
            <Sparkles
                count={100}
                position={[-15, 8, -2.55]}
                size={5}
                scale={[5, 15, 25]}
                speed={0.2}
            />
            <Sparkles
                count={50}
                position={[0, 2, -17.2]}
                size={2}
                scale={[25, 15, 5]}
                speed={0.2}
            />
        </>
    )
}

const Decoration = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/decorationMeshes.glb")
    return (
        <group dispose={null}>
            <group position={[-3.05, 5.351, -17.969]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043.geometry}
                    material={materials.rockMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_1.geometry}
                    material={materials.treeMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_2.geometry}
                    material={materials.fundationMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_3.geometry}
                    material={materials.doorKnobMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_4.geometry}
                    material={materials.Verre}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_5.geometry}
                    material={materials.Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_6.geometry}
                    material={materials.Gomme}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_7.geometry}
                    material={materials.Carrosserie}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_8.geometry}
                    material={materials.Toit}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_9.geometry}
                    material={materials.pharesArrieres}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_10.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_11.geometry}
                    material={materials.BodyMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_12.geometry}
                    material={materials.GlassesMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_13.geometry}
                    material={materials.ShadesMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_14.geometry}
                    material={materials.ShoeMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_15.geometry}
                    material={materials.HandMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_16.geometry}
                    material={materials.ArmMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube043_17.geometry}
                    material={materials.HeadMaterial}
                />
            </group>
        </group>
    )
}

const CopperMeshes = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/copperMeshes.glb")
    return (
        <group dispose={null}>
            <mesh
                castShadow
                geometry={nodes.VUE.geometry}
                material={materials.copperMaterial}
                position={nodes.VUE.position}
            />
        </group>
    )
}

const SilverMeshes = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/silverMeshes.glb")
    return (
        <group dispose={null}>
            <mesh
                castShadow
                geometry={nodes.REACT.geometry}
                material={materials.silverMaterial}
                position={nodes.REACT.position}
            />
        </group>
    )
}

const GoldMeshes = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/goldMeshes.glb")
    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.textAchievments.geometry}
                material={materials.goldMaterial}
                position={[-17.81, 13.359, 6.456]}
            />
        </group>
    )
}

const Paintings = () => {
    const abandonedHouseTexture = useTexture('textures/abandonedHouse.png')
    const projectTexture = useTexture('textures/projet.jpg')

    const onPaintingClick = () => {
        window.open('https://abandoned-house.vercel.app', '_blank')
    }

    return (
        <group>
            <mesh
                position={[-17.9, 7.9, -5]}
                rotation-y={Math.PI * 0.5}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
                onClick={onPaintingClick}
            >
                <planeGeometry
                    args={[8.2, 5]}
                />
                <meshBasicMaterial
                    map={abandonedHouseTexture}
                />
            </mesh>
            <mesh
                position={[-17.9, 7.9, 4.6]}
                rotation-y={Math.PI * 0.5}
            >
                <planeGeometry
                    args={[4.7, 4.7]}
                />
                <meshBasicMaterial
                    map={projectTexture}
                />
            </mesh>
        </group>
    )
}

const QuestionMarks = () => {
    const { nodes, materials } = useGLTF("/models/Scene2/questionMarks.glb")
    const [isMouseOn2DQuestionMark, setIsMouseOn2DQuestionMark] = useState(false)
    const [isMouseOn3DQuestionMark, setIsMouseOn3DQuestionMark] = useState(false)
    const [isMouseOnDevQuestionMark, setIsMouseOnDevQuestionMark] = useState(false)
    const { started } = useScenesStore()

    const pointerEnter2D = () => {
        document.body.style.cursor = 'pointer'
        setIsMouseOn2DQuestionMark(true)
    }

    const pointerLeave2D = () => {
        document.body.style.cursor = 'default'
        setIsMouseOn2DQuestionMark(false)
    }

    const pointerEnter3D = () => {
        document.body.style.cursor = 'pointer'
        setIsMouseOn3DQuestionMark(true)
    }

    const pointerLeave3D = () => {
        document.body.style.cursor = 'default'
        setIsMouseOn3DQuestionMark(false)
    }
    const pointerEnterDev = () => {
        document.body.style.cursor = 'pointer'
        setIsMouseOnDevQuestionMark(true)
    }

    const pointerLeaveDev = () => {
        document.body.style.cursor = 'default'
        setIsMouseOnDevQuestionMark(false)
    }

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["2dQuestionMark"].geometry}
                material={materials.goldMaterial}
                position={nodes["2dQuestionMark"].position}
                onPointerEnter={pointerEnter2D}
                onPointerLeave={pointerLeave2D}
            >
                {started &&
                    <Html
                        position={[0, 2, -3]}
                        wrapperClass={isMouseOn2DQuestionMark ? "d2-question-marks" : "d2-question-marks-inactive"}
                    >
                        <div className={isMouseOn2DQuestionMark ? "d2-question-mark" : "d2-question-mark-inactive"}>
                            <h2 className="d2-question-mark-title">Compétences 2D</h2>
                            <h3 className="d2-question-mark-skill">Adobe Photoshop : Confirmé</h3>
                            <h3 className="d2-question-mark-skill">Adobe Première : Confirmé</h3>
                            <h3 className="d2-question-mark-skill">Adobe After Effects : Intermédiaire</h3>
                            <h3 className="d2-question-mark-skill">Adobe InDesign : Novice</h3>
                            <h3 className="d2-question-mark-skill">Adobe Illustrator : Novice</h3>
                        </div>
                    </Html>
                }
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes["3dQuestionMark"].geometry}
                material={materials.goldMaterial}
                position={nodes["3dQuestionMark"].position}
                onPointerEnter={pointerEnter3D}
                onPointerLeave={pointerLeave3D}
            >
                {started &&
                    <Html
                        position={[0, 2.2, -2]}
                        wrapperClass={isMouseOn3DQuestionMark ? "d3-question-marks" : "d3-question-marks-inactive"}
                    >
                        <div className={isMouseOn3DQuestionMark ? "d3-question-mark" : "d3-question-mark-inactive"}>
                            <h2 className="d3-question-mark-title">Compétences 3D</h2>
                            <h3 className="d3-question-mark-skill">Blender : Confirmé</h3>
                            <h3 className="d3-question-mark-skill">Autodesk Maya : Confirmé</h3>
                            <h3 className="d3-question-mark-skill">Dimforge Rapier : Novice</h3>
                        </div>
                    </Html>
                }
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.devQuestionMark.geometry}
                material={materials.goldMaterial}
                position={nodes.devQuestionMark.position}
                onPointerEnter={pointerEnterDev}
                onPointerLeave={pointerLeaveDev}
            >
                {started &&
                    <Html
                        position={[0, 2.4, -1.5]}
                        wrapperClass={isMouseOnDevQuestionMark ? "dev-question-marks" : "dev-question-marks-inactive"}
                    >
                        <div className={isMouseOnDevQuestionMark ? "dev-question-mark" : "dev-question-mark-inactive"}>
                            <h2 className="dev-question-mark-title">Compétences Dev</h2>
                            <h3 className="dev-question-mark-skill">HTML5 : Confirmé</h3>
                            <h3 className="dev-question-mark-skill">CSS3, SASS, Tailwind : Confirmé</h3>
                            <h3 className="dev-question-mark-skill">JavaScript : Intermédiaire</h3>
                            <h3 className="dev-question-mark-skill">Typescript : Intermédiaire</h3>
                            <h3 className="dev-question-mark-skill">Three.js : Intermédiaire</h3>
                            <h3 className="dev-question-mark-skill">Vite : Novice</h3>
                            <h3 className="dev-question-mark-skill">React : Intermédiaire</h3>
                            <h3 className="dev-question-mark-skill">Vue.js : Novice</h3>
                        </div>
                    </Html>}

            </mesh>
        </group>
    )
}

useGLTF.preload("/models/Scene2/museumMeshes.glb")
useGLTF.preload("/models/Scene2/decorationMeshes.glb")
useGLTF.preload("/models/Scene2/copperMeshes.glb")
useGLTF.preload("/models/Scene2/silverMeshes.glb")
useGLTF.preload("/models/Scene2/goldMeshes.glb")
useGLTF.preload("/models/Scene2/questionMarks.glb")