import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Sparkles(props) {
    const sparklesGroup = useRef()
    const sparkles = useGLTF('models/sparkle.glb')
    const animations = useAnimations(sparkles.animations, sparklesGroup)

    useEffect(() => {
        animations.names.forEach(name => {
            animations.actions[name].play()
        })
    })

    return (
        <group
            ref={sparklesGroup}
            {...props}
            dispose={null}
            position={[-2.81, 0.07, 2.10]}
            scale={0.25}
            rotation-y={-Math.PI * 0.5 + 0.5}
        >
            <group name='Scene'>
                <mesh
                    name='particle000'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle000.geometry}
                    position={[0.248, 1.903, 0.098]}
                    rotation={[-0.085, 0.233, 1.528]}
                    scale={0.14}
                />
                <mesh
                    name='particle001'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle001.geometry}
                    position={[0.302, 1.574, 0.344]}
                    rotation={[0.133, 0.227, 1.63]}
                    scale={0.001}
                />
                <mesh
                    name='particle002'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle002.geometry}
                    position={[-0.014, 1.279, -0.393]}
                    rotation={[-0.107, 0.02, 1.495]}
                    scale={0.001}
                />
                <mesh
                    name='particle003'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle003.geometry}
                    position={[-0.052, 1.131, -0.243]}
                    rotation={[0.131, 0.181, 1.429]}
                    scale={0.001}
                />
                <mesh
                    name='particle004'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle004.geometry}
                    position={[-0.398, 1.483, 0.23]}
                    rotation={[-0.091, 0.096, 1.575]}
                    scale={0.001}
                />
                <mesh
                    name='particle005'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle005.geometry}
                    position={[0.161, 1.539, -0.433]}
                    rotation={[-0.165, 0.44, 1.635]}
                    scale={0.001}
                />
                <mesh
                    name='particle006'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle006.geometry}
                    position={[0.281, 1.772, 0.272]}
                    rotation={[-0.073, 0.315, 1.774]}
                    scale={0.001}
                />
                <mesh
                    name='particle007'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle007.geometry}
                    position={[-0.135, 1.117, 0.176]}
                    rotation={[0.244, 0.303, 1.667]}
                    scale={0.001}
                />
                <mesh
                    name='particle008'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle008.geometry}
                    position={[-0.493, 2.502, -4.782]}
                    rotation={[0.015, 0.219, 1.512]}
                    scale={0.001}
                />
                <mesh
                    name='particle009'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle009.geometry}
                    position={[1.857, 1.818, -2.483]}
                    rotation={[-0.042, 0.54, 1.443]}
                    scale={0.001}
                />
                <mesh
                    name='particle010'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle010.geometry}
                    position={[-0.376, 0.945, -3.483]}
                    rotation={[0.041, -0.004, 1.783]}
                    scale={0.001}
                />
                <mesh
                    name='particle011'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle011.geometry}
                    position={[-0.183, 5.215, -3.55]}
                    rotation={[-0.183, 0.011, 1.72]}
                    scale={0.001}
                />
                <mesh
                    name='particle012'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle012.geometry}
                    position={[-0.021, 2.421, -1.32]}
                    rotation={[0.101, 0.121, 1.45]}
                    scale={0.001}
                />
                <mesh
                    name='particle013'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle013.geometry}
                    position={[-0.876, 3.136, -1.583]}
                    rotation={[0.139, 0.123, 1.464]}
                    scale={0.001}
                />
                <mesh
                    name='particle014'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle014.geometry}
                    position={[-1.128, 2.407, -3.286]}
                    rotation={[-0.163, 0.338, 1.728]}
                    scale={0.001}
                />
                <mesh
                    name='particle015'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle015.geometry}
                    position={[0.263, 4.291, -3.922]}
                    rotation={[0.151, 0.283, 1.687]}
                    scale={0.001}
                />
                <mesh
                    name='particle016'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle016.geometry}
                    position={[2.481, 2.856, -4.947]}
                    rotation={[-0.049, -0.066, 1.52]}
                    scale={0.001}
                />
                <mesh
                    name='particle017'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle017.geometry}
                    position={[-1.859, 2.57, -5.233]}
                    rotation={[0.196, 0.152, 1.363]}
                    scale={0.001}
                />
                <mesh
                    name='particle018'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle018.geometry}
                    position={[0.873, 0.566, -6.609]}
                    rotation={[0.041, 0.328, 1.581]}
                    scale={0.001}
                />
                <mesh
                    name='particle019'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle019.geometry}
                    position={[2.071, 1.346, -2.945]}
                    rotation={[-0.202, 0.188, 1.424]}
                    scale={0.001}
                />
                <mesh
                    name='particle020'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle020.geometry}
                    position={[-2.548, 1.049, -5.096]}
                    rotation={[0.019, 0.097, 1.554]}
                    scale={0.001}
                />
                <mesh
                    name='particle021'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle021.geometry}
                    position={[-1.002, 4.145, -2.63]}
                    rotation={[-0.094, -0.137, 1.722]}
                    scale={0.001}
                />
                <mesh
                    name='particle022'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle022.geometry}
                    position={[-2.116, 3.579, -5.539]}
                    rotation={[0.209, 0.07, 1.408]}
                    scale={0.001}
                />
                <mesh
                    name='particle023'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle023.geometry}
                    position={[0.041, 4.86, -4.877]}
                    rotation={[0.076, 0.249, 1.616]}
                    scale={0.001}
                />
                <mesh
                    name='particle024'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle024.geometry}
                    position={[2.245, 0.561, -7.079]}
                    rotation={[-0.25, 0.116, 1.572]}
                    scale={0.001}
                />
                <mesh
                    name='particle025'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle025.geometry}
                    position={[-1.415, 3.606, -3.816]}
                    rotation={[-0.066, 0.12, 1.601]}
                    scale={0.001}
                />
                <mesh
                    name='particle026'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle026.geometry}
                    position={[1.368, 3.971, -5.405]}
                    rotation={[0.223, 0.149, 1.684]}
                    scale={0.001}
                />
                <mesh
                    name='particle027'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle027.geometry}
                    position={[-1.495, 2.501, -4.702]}
                    rotation={[-0.096, 0.01, 1.619]}
                    scale={0.001}
                />
                <mesh
                    name='particle028'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle028.geometry}
                    position={[-1.222, 2.348, -3.953]}
                    rotation={[0.041, 0.516, 1.535]}
                    scale={0.001}
                />
                <mesh
                    name='particle029'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle029.geometry}
                    position={[-0.682, 3.004, -3.598]}
                    rotation={[0.122, 0.106, 1.34]}
                    scale={0.001}
                />
                <mesh
                    name='particle030'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle030.geometry}
                    position={[-0.087, 4.139, -3.315]}
                    rotation={[0.178, 0.183, 1.727]}
                    scale={0.001}
                />
                <mesh
                    name='particle031'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle031.geometry}
                    position={[0.909, 3.845, -2.732]}
                    rotation={[-0.084, 0.026, 1.568]}
                    scale={0.001}
                />
                <mesh
                    name='particle032'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle032.geometry}
                    position={[-0.321, 2.374, -6.836]}
                    rotation={[0.188, 0.348, 1.415]}
                    scale={0.001}
                />
                <mesh
                    name='particle033'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle033.geometry}
                    position={[0.227, 3.028, -5.372]}
                    rotation={[-0.084, 0.202, 1.484]}
                    scale={0.001}
                />
                <mesh
                    name='particle034'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle034.geometry}
                    position={[-1.238, 0.789, -3.11]}
                    rotation={[-0.123, 0.392, 1.741]}
                    scale={0.001}
                />
                <mesh
                    name='particle035'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle035.geometry}
                    position={[-2.399, 1.301, -3.936]}
                    rotation={[-0.025, 0.325, 1.692]}
                    scale={0.001}
                />
                <mesh
                    name='particle036'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle036.geometry}
                    position={[0.378, 1.985, -5.012]}
                    rotation={[-0.015, 0.178, 1.831]}
                    scale={0.001}
                />
                <mesh
                    name='particle037'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle037.geometry}
                    position={[0.145, 3.245, -2.427]}
                    rotation={[-0.255, 0.105, 1.423]}
                    scale={0.001}
                />
                <mesh
                    name='particle038'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle038.geometry}
                    position={[1.009, 0.764, -3.363]}
                    rotation={[0.023, -0.047, 1.598]}
                    scale={0.001}
                />
                <mesh
                    name='particle039'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle039.geometry}
                    position={[0.761, 2.03, -1.772]}
                    rotation={[-0.051, -0.209, 1.739]}
                    scale={0.001}
                />
                <mesh
                    name='particle040'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle040.geometry}
                    position={[1.142, 3.07, -4.507]}
                    rotation={[0.065, 0.501, 1.357]}
                    scale={0.001}
                />
                <mesh
                    name='particle041'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle041.geometry}
                    position={[1.3, 2.694, -3.228]}
                    rotation={[-0.236, 0.162, 1.79]}
                    scale={0.001}
                />
                <mesh
                    name='particle042'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle042.geometry}
                    position={[0.244, 2.829, -4.426]}
                    rotation={[0.066, 0.25, 1.615]}
                    scale={0.001}
                />
                <mesh
                    name='particle043'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle043.geometry}
                    position={[0.886, 2.457, -2.421]}
                    rotation={[-0.132, 0.086, 1.418]}
                    scale={0.001}
                />
                <mesh
                    name='particle044'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle044.geometry}
                    position={[1.763, 1.961, -3.068]}
                    rotation={[-0.044, 0.128, 1.445]}
                    scale={0.001}
                />
                <mesh
                    name='particle045'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle045.geometry}
                    position={[0.545, 1.838, -3.626]}
                    rotation={[-0.038, 0.171, 1.587]}
                    scale={0.001}
                />
                <mesh
                    name='particle046'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle046.geometry}
                    position={[0.522, 1.598, -1.289]}
                    rotation={[0.247, -0.065, 1.674]}
                    scale={0.001}
                />
                <mesh
                    name='particle047'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle047.geometry}
                    position={[0.555, 1.431, -1.243]}
                    rotation={[0.032, 0.085, 1.668]}
                    scale={0.001}
                />
                <mesh
                    name='particle048'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle048.geometry}
                    position={[-1.336, 1.872, -1.778]}
                    rotation={[-0.202, -0.088, 1.701]}
                    scale={0.001}
                />
                <mesh
                    name='particle049'
                    castShadow
                    receiveShadow
                    geometry={sparkles.nodes.particle049.geometry}
                    position={[-0.672, 3.246, -3.03]}
                    rotation={[-0.021, 0.193, 1.498]}
                    scale={0.001}
                />
            </group>
        </group>
    )
}

useGLTF.preload('models/sparkle.glb')