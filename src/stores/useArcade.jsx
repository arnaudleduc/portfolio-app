import { create } from 'zustand'

const useArcadeStore = create((set) => ({
    isCameraZoomed: false,
    toggleCameraZoom: () => set((state) => ({
        isCameraZoomed: !state.isCameraZoomed
    }))
}))

export default useArcadeStore