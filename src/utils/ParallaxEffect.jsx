import { useFrame } from "@react-three/fiber"

export default function ParallaxEffect() {
    /**
     * Cursor
     */
    const cursor = {}
    cursor.x = 0
    cursor.y = 0

    document.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / window.innerWidth - 0.5
        cursor.y = event.clientY / window.innerHeight - 0.5
    })

    useFrame((state) => {
        const parallaxX = - cursor.x * 0.5
        const parallaxY = cursor.y * 0.5
        state.scene.position.x += (parallaxX - state.scene.position.x) * 0.1
        state.scene.position.y += (parallaxY - state.scene.position.y) * 0.1
    })

    return null
}