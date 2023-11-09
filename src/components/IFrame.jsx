import { Html } from "@react-three/drei"
import '../style/iframe.css'

export default function IFrame({ started }) {
    return (
        <Html
            transform
            wrapperClass={started ? "contact-page-visible" : "contact-page"}
            distanceFactor={2}
            position={[-0.24, 6.77, -4.52]}
        >
            <iframe src="/contact" />
        </Html>
    )
}