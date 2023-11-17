import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useEffect, useRef } from "react"
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei"

import MeshGroup1 from '../components/MeshGroup1'
import MeshGroup2 from '../components/MeshGroup2'
import MeshGroup3 from '../components/MeshGroup3'
import MeshGroup4 from '../components/MeshGroup4'
import BoardZDK from '../components/BoardZDK'
import BuildingsWindows from "../components/BuildingsWindows"
import MuseumDoors from "../components/MuseumDoors"
import NeonArcade from "../components/NeonArcade"
import NeonMuseum from "../components/NeonMuseum"
import NeonMuseumArrows from "../components/NeonMuseumArrows"
import Puddle from "../components/Puddle"
import IFrameContact from "../components/IFrameContact"
import PaintIcons from "../components/PaintIcons"
import Arrow from "../components/NavigationArrowsIn"

import ParallaxEffect from "../utils/ParallaxEffect"


export default function Scene1Street({ started }) {
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
                    intensity={0.1}
                    luminanceThreshold={8}
                />
            </EffectComposer >
            {/* <ParallaxEffect cameraGroup={cameraGroup}/> */}
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
            <IFrameContact started={started} />
            <PaintIcons started={started} />
            <Arrow
                scale={0.25}
            />
        </>

    )
}