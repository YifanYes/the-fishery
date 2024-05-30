import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const updateTemplateValidator = vine.compile(
  vine.object({
    content: vine.object({
      key_partners: vine.string().nullable(),
      key_activities: vine.string().nullable(),
      value_propositions: vine.string().nullable(),
      customer_relationships: vine.string().nullable(),
      customer_segments: vine.string().nullable(),
      key_resources: vine.string().nullable(),
      channels: vine.string().nullable(),
      cost_structure: vine.string().nullable(),
      revenue_streams: vine.string().nullable(),
    }),
  })
)

updateTemplateValidator.messagesProvider = new SimpleMessagesProvider({
  'content.required': 'Template content is required.',
})
