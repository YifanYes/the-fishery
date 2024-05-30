import { DateTime } from 'luxon'

export type UserType = {
  id: string
  email: string
  created_at: DateTime
}
