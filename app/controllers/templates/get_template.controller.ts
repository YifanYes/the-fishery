import TemplateService from '#services/template.service'
import TemplateTransformer from '#transformers/templates/template.transformer'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GetTemplateController {
  constructor(protected service: TemplateService) {}

  async handle({ params, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()

      const template = await this.service.getById(params.id, user.id)
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
