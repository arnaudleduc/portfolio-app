import { create } from 'zustand'

const useScenesStore = create((set) => ({
    scene: 1,
    sceneToArcade: () => set(() => ({
        scene: 3
    })),
    sceneToMuseum: () => set(() => ({
        scene: 2
    })),
    sceneToMain: () => set(() => ({
        scene: 1
    })),
    started: false,
    setStarted: () => set(() => ({
        started: true
    })),
    setNotStarted: () => set(() => ({
        started: false
    }))
}))

export default useScenesStore