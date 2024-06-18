import UserService from '#services/user.service'
import UserTransformer from '#transformers/auth/user.transformer'
import { updateUserValidator } from '#validators/users/update_user.validator'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UpdateUserController {
  constructor(protected service: UserService) {}

  async handle({ request, response, params }: HttpContext) {
    try {
      const data = await request.validateUsing(updateUserValidator)

      const user = await this.service.getById(params.id)
      if (!user) return response.notFound({ message: 'User not found' })

      await user.merge(data).save()

      return response.ok({
        message: 'User updated successfully',
        data: UserTransformer(user),
      })
    } catch (error) {
      console.error(error)
      return response.internalServerError(error)
    }
  }
}
