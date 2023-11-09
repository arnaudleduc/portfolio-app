import { create } from 'zustand'

const useSoundsStore = create((set) => ({
    isSoundOn: true,
    toggleSounds: () => set((state) => ({
        isSoundOn: !state.isSoundOn
    }))
}))

export default useSoundsStore