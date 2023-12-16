/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
// import { Perf } from 'r3f-perf'
import Scene1Street from "../scenes/Scene1Street";
import Scene2Museum from "../scenes/Scene2Museum";
import Scene3Arcade from "../scenes/Scene3Arcade";

import LoadingScreen from "../components/LoadingScreen";
import Interface from "../components/Interface";

import useScenesStore from "../stores/useScenes";
import ClassicDisplay from "./ClassicDisplay";

export default function App() {
  const { scene } = useScenesStore();
  const isUserOnMobile = window.innerWidth <= 768 ? true : false;

  console.log(isUserOnMobile);

  if (scene === 1 && !isUserOnMobile) {
    return (
      <>
        <Canvas shadows>
          {/* <Perf
                        position='top-left'
                    /> */}
          {displayScene1()}
        </Canvas>
        <Interface />
        <LoadingScreen scene="main" />
      </>
    );
  } else if (scene === 2 && !isUserOnMobile) {
    return (
      <>
        <Canvas shadows>
          {/* <Perf
                        position='top-left'
                    /> */}
          {displayScene2()}
        </Canvas>
        <Interface />
        <LoadingScreen scene="museum" />
      </>
    );
  } else if (scene === 3 && !isUserOnMobile) {
    return (
      <>
        <Canvas shadows>
          {/* <Perf
                        position='top-left'
                    /> */}
          {displayScene3()}
        </Canvas>
        <Interface />
        <LoadingScreen scene="arcade" />
      </>
    );
  } else {
    return <ClassicDisplay />;
  }
}

const displayScene1 = () => {
  return (
    <>
      <Environment
        background
        files={[
          "textures/envMap/px.png",
          "textures/envMap/nx.png",
          "textures/envMap/py.png",
          "textures/envMap/ny.png",
          "textures/envMap/pz.png",
          "textures/envMap/nz.png",
        ]}
        blur={0.8}
      />
      <ambientLight intensity={1.4} />
      <Suspense fallback={null}>
        <Scene1Street />
      </Suspense>
    </>
  );
};

const displayScene2 = () => {
  return (
    <>
      <color args={["#000000"]} attach="background" />
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <Scene2Museum />
      </Suspense>
    </>
  );
};

const displayScene3 = () => {
  return (
    <>
      <color args={["#000000"]} attach="background" />
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <Scene3Arcade />
      </Suspense>
    </>
  );
};
