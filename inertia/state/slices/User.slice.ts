import { StateCreator } from 'zustand'
import { User } from '~/models'
import { UserSliceType } from '~/types/state.types'

const createUserSlice: StateCreator<UserSliceType, [], [], UserSliceType> = (set) => ({
  user: undefined,
  setUser: (user?: User) => set(() => ({ user })),
})

export default createUserSlice
