import { Html } from "@react-three/drei"
import { useControls } from "leva"
import '../style/paint-icons.css'

export default function PaintIcons({ started }) {
    return (
        <Html
            transform
            wrapperClass={started ? "paint-icons-visible" : "paint-icons"}
            distanceFactor={2}
            position={[-3.60, 2.50, -6.10]}
            rotation-y={-Math.PI * 0.5}
            rotation-x={Math.PI * 0.03}
        >
            <a href="https://github.com/arnaudleduc" target="blank">
                <img
                    src="icons/githubPaintIcon.png"
                    className="icon-github"
                />
            </a>
            <a href="https://www.linkedin.com/in/arnaudleduc/" target="blank">
                <img
                    src="icons/linkedinPaintIcon.png"
                    className="icon-linkedin"
                />
            </a>
        </Html>
    )
}