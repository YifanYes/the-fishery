import User from '#models/user'
import { UserType } from '#types/auth.types'

const UserTransformer = ({
  uuid,
  email,
  title,
  details,
  social_media,
  created_at,
}: User): UserType => ({
  id: uuid,
  email,
  title,
  details,
  social_media,
  created_at,
})

export default UserTransformer
