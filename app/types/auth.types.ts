import { DateTime } from 'luxon'

export type UserType = {
  id: string
  email: string
  title: string | null
  details: object | null
  social_media: object | null
  created_at: DateTime
}
