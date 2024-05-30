import User from '#models/user'
import { loginValidator } from '#validators/auth/login.validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async handle({ request, response }: HttpContext) {
    try {
      const { email, password } = await request.validateUsing(loginValidator)
      const user = await User.verifyCredentials(email, password)
      const token = await User.accessTokens.create(user)

      return response.status(200).send({
        data: token.value!.release(),
      })
    } catch (error) {
      if (error.messages) return response.badRequest(error.messages)

      if (error.code === 'E_INVALID_CREDENTIALS')
        return response.badRequest({ message: 'Invalid credentials' })
    }
  }
}
