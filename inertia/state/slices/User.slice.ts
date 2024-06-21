import { StateCreator } from 'zustand'
import { UserSliceType } from '~/types/state.types'

const createUserSlice: StateCreator<UserSliceType, [], [], UserSliceType> = (set) => ({
  user: undefined,
  setUser: (user: any) => set(() => ({ user })),
})

export default createUserSlice
