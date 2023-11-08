import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useControls } from "leva"

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

export default function Experience() {
    // Debug
    const { bloomIntensity, luminanceThreshold } = useControls({
        bloomIntensity: 0.2,
        luminanceThreshold: {
            value: 5,
            step: 1
        }
    })

    return (
        <>
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    intensity={bloomIntensity}
                    luminanceThreshold={luminanceThreshold}
                />
            </EffectComposer>
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
        </>

    )
}