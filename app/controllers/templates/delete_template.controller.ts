import TemplateService from '#services/template.service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class DeleteTemplateController {
  constructor(protected service: TemplateService) {}

  async handle({ params, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()

      const template = await this.service.getById(params.id, user.id)
      if (!template) return response.notFound({ message: 'Template not found' })

      await template.delete()

      return response.ok({
        message: 'Template deleted successfully',
        data: null,
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
