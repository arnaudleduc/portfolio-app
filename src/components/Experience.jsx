import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useThree } from "@react-three/fiber"
import * as THREE from 'three'
import { useEffect, useRef } from "react"
import { PerspectiveCamera, useHelper } from "@react-three/drei"

import MeshGroup1 from './MeshGroup1'
import MeshGroup2 from './MeshGroup2'
import MeshGroup3 from './MeshGroup3'
import MeshGroup4 from './MeshGroup4'
import BoardZDK from './BoardZDK'
import BuildingsWindows from "./BuildingsWindows"
import MuseumDoors from "./MuseumDoors"
import NeonArcade from "./NeonArcade"
import NeonMuseum from "./NeonMuseum"
import NeonMuseumArrows from "./NeonMuseumArrows"
import Puddle from "./Puddle"
import IFrame from "./IFrame"
import PaintIcons from "./PaintIcons"

import ParallaxEffect from "../utils/ParallaxEffect"


export default function Experience({ started }) {
    const mainCamera = useRef()
    const cameraGroup = useRef()
    // useHelper(mainCamera, THREE.CameraHelper, 'red')

    useEffect(() => {
        mainCamera.current.lookAt(0, 4.4, 0)
    }, [])

    return (
        <>
            <group ref={cameraGroup}>
                <PerspectiveCamera
                    ref={mainCamera}
                    makeDefault
                    near={0.1}
                    far={170}
                    fov={15}
                    position={[-29.4, 35, 26]}
                />
            </group>

            <EffectComposer>
                <Bloom
                    // mipmapBlur
                    intensity={0.1}
                    luminanceThreshold={8}
                />
            </EffectComposer >
            <ParallaxEffect cameraGroup={cameraGroup}/>
            < MeshGroup1 />
            <BoardZDK />
            <NeonArcade />
            <MeshGroup2 />
            <BuildingsWindows />
            <NeonMuseum />
            <NeonMuseumArrows />
            <MuseumDoors />
            <MeshGroup3 />
            <MeshGroup4 />
            <Puddle />
            {/* <Sparkles /> */}
            <IFrame started={started} />
            <PaintIcons started={started} />
        </>

    )
}