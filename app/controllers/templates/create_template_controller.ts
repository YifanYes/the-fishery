import Template from '#models/template'
import { createTemplateValidator } from '#validators/templates/create_template_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class CreateTemplateController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()

      const data = await request.validateUsing(createTemplateValidator)
      const template = await Template.create({
        type: data.type,
        content: data.content ?? null,
        userId: user.id,
      })

      return response.created({ message: 'Template created successfully', template })
    } catch (error) {
      console.error(error)
      return response.badRequest(error.messages)
    }
  }
}
