import TemplateService from '#services/template.service'
import TemplateTransformer from '#transformers/templates/template.transformer'
import { updateTemplateValidator } from '#validators/templates/update_template.validator'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UpdateTemplateController {
  constructor(protected service: TemplateService) {}

  async handle({ request, response, auth, params }: HttpContext) {
    try {
      const data = await request.validateUsing(updateTemplateValidator)
      const user = auth.getUserOrFail()

      const template = await this.service.getById(params.id, user.id)
      if (!template) return response.notFound({ message: 'Template not found' })

      await template.merge(data).save()

      return response.created({
        message: 'Template updated successfully',
        data: TemplateTransformer(template),
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
