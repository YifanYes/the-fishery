import TransformerHelper from '#helpers/transformer.helper'
import Template from '#models/template'
import TemplateTransformer from '#transformers/templates/template.transformer'
import type { HttpContext } from '@adonisjs/core/http'

export default class GetTemplatesListController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const user = auth.getUserOrFail()
      const page = request.input('page', 1)
      const limit = request.input('limit', 10)

      const query = await Template.query()
        .select('uuid', 'type', 'content', 'created_at')
        .where('user_id', user.id)
        .paginate(page, limit)
      const templates = query.toJSON()

      return response.ok({
        message: 'Templates queried successfully',
        meta: templates.meta,
        data: TransformerHelper.getCollection(templates.data, TemplateTransformer),
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
