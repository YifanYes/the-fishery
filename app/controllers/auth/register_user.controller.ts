import User from '#models/user'
import UserTransformer from '#transformers/auth/user.transformer'
import { registerUserValidator } from '#validators/auth/register_user.validator'

import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterUserController {
  async handle({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(registerUserValidator)
      const user = await User.create(data)

      return response.created({
        message: 'User registered successfully',
        data: UserTransformer(user),
      })
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }
}
