import { Bloom, EffectComposer, DepthOfField } from "@react-three/postprocessing"

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
import Sparkles from "./Sparkles"
import IFrame from "./IFrame"

import ParallaxEffect from "../utils/ParallaxEffect"


export default function Experience({ started }) {
    return (
        <>
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={0.2}
                    luminanceThreshold={5}
                />
            </EffectComposer>
            <ParallaxEffect />
            <MeshGroup1 />
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
        </>

    )
}