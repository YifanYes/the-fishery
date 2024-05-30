import { TemplateType } from '#models/template'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createTemplateValidator = vine.compile(
  vine.object({
    type: vine.enum([TemplateType.BusinessModel]),
    content: vine
      .object({
        key_partners: vine.string().nullable(),
        key_activities: vine.string().nullable(),
        value_propositions: vine.string().nullable(),
        customer_relationships: vine.string().nullable(),
        customer_segments: vine.string().nullable(),
        key_resources: vine.string().nullable(),
        channels: vine.string().nullable(),
        cost_structure: vine.string().nullable(),
        revenue_streams: vine.string().nullable(),
      })
      .nullable(),
  })
)

createTemplateValidator.messagesProvider = new SimpleMessagesProvider({
  'type.required': 'Template type is required.',
})
