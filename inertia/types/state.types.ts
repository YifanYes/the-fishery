import { User } from '~/models'

export type UserSliceType = {
  user?: User
  setUser: (user?: User) => void
}
