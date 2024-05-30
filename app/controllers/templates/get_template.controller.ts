import Template from '#models/template'
import TemplateTransformer from '#transformers/templates/template.transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class GetTemplateController {
  async handle({ params, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()

      const template = await Template.query()
        .where('uuid', params.id)
        .where('user_id', user.id)
        .first()

      if (!template) return response.notFound({ message: 'Template not found' })

      return response.ok({
        message: 'Template queried successfully',
        data: TemplateTransformer(template),
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
