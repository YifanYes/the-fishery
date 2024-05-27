import User from '#models/user'
import { registerUserValidator } from '#validators/auth/register_user_validator'

import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterUserController {
  async handle({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(registerUserValidator)
      const user = await User.create(data)

      return response.created({ message: 'User registered successfully', user })
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }
}
