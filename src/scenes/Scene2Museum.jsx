import { useRef, useEffect } from "react"
import { OrbitControls, PerspectiveCamera} from "@react-three/drei"

import Museum from "../components/Museum"

import ParallaxEffect from "../utils/ParallaxEffect"

export default function Scene2Museum() {
    const mainCamera = useRef()
    const cameraGroup = useRef()
    // useHelper(mainCamera, THREE.CameraHelper, 'red')

    useEffect(() => {
        mainCamera.current.lookAt(0, 3.3, 0)
    }, [])

    return (
        <>
            <group ref={cameraGroup}>
                <PerspectiveCamera
                    ref={mainCamera}
                    makeDefault
                    near={0.1}
                    far={170}
                    fov={20}
                    position={[29, 6, -29]}
                />
            </group>
            <ParallaxEffect cameraGroup={cameraGroup} />
            {/* <OrbitControls /> */}
            <Museum />
        </>

    )
}