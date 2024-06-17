import UserService from '#services/user.service'
import UserTransformer from '#transformers/auth/user.transformer'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GetUserController {
  constructor(protected service: UserService) {}

  async handle({ response, params }: HttpContext) {
    try {
      const user = await this.service.getById(params.id)
      if (!user) return response.notFound({ message: 'User not found' })

      return response.ok({
        message: 'User queried successfully',
        data: UserTransformer(user),
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
