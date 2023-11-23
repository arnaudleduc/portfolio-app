import { Html } from "@react-three/drei"
import '../style/iframe.css'

export default function IFrame({ started, page }) {
    if (page === "contact") {
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
    } else if (page === "experiences") {
        return (
            <Html
                transform
                wrapperClass={started ? "experiences-page-visible" : "experiences-page"}
                distanceFactor={1.5}
                position={[0, 7.25, -21.78]}
                rotation-x={-Math.PI * 0.09}
            >
                <iframe src="/experiences" />
            </Html>
        )
    }
    
}