import User from '#models/user'
import { UserType } from '#types/auth.types'

const UserTransformer = ({ uuid, email, created_at }: User): UserType => ({
  id: uuid,
  email,
  created_at,
})

export default UserTransformer
