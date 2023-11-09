import { create } from 'zustand'

const useSoundsStore = create((set) => ({
    isSoundOn: false,
    toggleSounds: () => set((state) => ({
        isSoundOn: !state.isSoundOn
    }))
}))

export default useSoundsStore