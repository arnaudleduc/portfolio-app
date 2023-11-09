import { Html } from "@react-three/drei"
import '../style/iframe.css'
import { useControls } from "leva"

export default function IFrame() {
    const { x, y, z} = useControls({
        x: 0,
        y: 0,
        z: 0
    })

    return (
        <Html
            transform
            wrapperClass="contact-page"
            distanceFactor={2}
            position={[-0.24, 6.77, -4.52]}
        >
            <iframe src="/contact" />
        </Html>
    )
}