import { DateTime } from 'luxon'

export type TemplateType = {
  id: string
  type: string
  content: object | null
  created_at: DateTime
}
