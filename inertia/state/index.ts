import { create } from 'zustand'
import { UserSliceType } from '~/types/state.types'
import { UserSlice } from './slices'

export const useStore = create<UserSliceType>()((...a) => ({
  ...UserSlice(...a),
}))
