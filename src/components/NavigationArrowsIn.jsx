import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

import useScenesStore from "../stores/useScenes"

export default function NavigationArrowsIn(props) {
    const arcadeArrow = useRef()
    const museumArrow = useRef()
    const { scene, sceneToArcade, sceneToMuseum, setNotStarted } = useScenesStore()
    const { nodes } = useGLTF("/models/Scene1/arrow.glb")

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        const z = Math.sin(time * 2) - 1
        arcadeArrow.current.position.set(-1.5, 3, -13 + z)

        const x = Math.sin(time * 2 + 3.15) - 1
        museumArrow.current.position.set(10 + x, 3, 0)
    })

    const onArcadeArrowClick = () => {
        sceneToArcade()
        setNotStarted()
    }

    const onMuseumArrowClick = () => {
        sceneToMuseum()
        setNotStarted()
    }

    return (
        <group
            {...props}
            dispose={null}
        >
            <mesh
                ref={arcadeArrow}
                geometry={nodes.arrow.geometry}
                rotation-y={Math.PI}
                onClick={onArcadeArrowClick}
            />
            <mesh
                ref={museumArrow}
                geometry={nodes.arrow.geometry}
                rotation-y={Math.PI * 0.5}
                onClick={onMuseumArrowClick}
            />
        </group>
    )

}

useGLTF.preload("/models/Scene1/arrow.glb")