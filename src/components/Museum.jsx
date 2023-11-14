import { useRef } from "react"
import { useGLTF, useHelper, useTexture } from "@react-three/drei"
import VolumetricSpotlight from "./VolumetricSpotLight"
import * as THREE from 'three'

import { useControls } from "leva"

export default function Museum() {
    return (
        <group scale={0.62}>
            <MuseumMesh />
            <Decoration />
            <CopperMeshes />
            <SilverMeshes />
            <GoldMeshes />
            <Paintings />
        </group>
    )
}

const MuseumMesh = (props) => {
    const { nodes, materials } = useGLTF("/models/Scene2/museumMeshes.glb")
    return (
        <>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
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
            <group >
                <VolumetricSpotlight

                    color={'#f7d081'}
                />
            </group>
        </>
    )
}

const Decoration = (props) => {
    const { nodes, materials } = useGLTF("/models/Scene2/decorationMeshes.glb")
    return (
        <group {...props} dispose={null}>
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

const CopperMeshes = (props) => {
    const { nodes, materials } = useGLTF("/models/Scene2/copperMeshes.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.VUE.geometry}
                material={materials.copperMaterial}
                position={nodes.VUE.position}
            />
        </group>
    )
}

const SilverMeshes = (props) => {
    const { nodes, materials } = useGLTF("/models/Scene2/silverMeshes.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.REACT.geometry}
                material={materials.silverMaterial}
                position={nodes.REACT.position}
            />
        </group>
    )
}

const GoldMeshes = (props) => {
    const { nodes, materials } = useGLTF("/models/Scene2/goldMeshes.glb")
    return (
        <group {...props} dispose={null}>
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

const Paintings = (props) => {
    const abandonedHouseTexture = useTexture('textures/abandonedHouse.png')

    return (
        <mesh
            position={[-17.9, 7.9, -5]}
            rotation-y={Math.PI * 0.5}
        >
            <planeGeometry
                args={[8.2, 5]}
            />
            <meshBasicMaterial
                map={abandonedHouseTexture}
            />
        </mesh>
    )
}

useGLTF.preload("/models/Scene2/museumMeshes.glb")
useGLTF.preload("/models/Scene2/decorationMeshes.glb")
useGLTF.preload("/models/Scene2/copperMeshes.glb")
useGLTF.preload("/models/Scene2/silverMeshes.glb")
useGLTF.preload("/models/Scene2/goldMeshes.glb")