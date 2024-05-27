import { uniqueRule } from '#validators/rules/unique'
import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    username: vine.string().use(uniqueRule({ table: 'users', column: 'username' })),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .use(uniqueRule({ table: 'users', column: 'email' })),
    password: vine.string().minLength(8),
  })
)

registerUserValidator.messagesProvider = new SimpleMessagesProvider({
  'username.required': 'The username is required.',
  'username.unique': 'The username is already taken. Please choose another one.',
  'email.required': 'The email is required.',
  'email.email': 'The email provided is not valid.',
  'email.unique': 'The email is already registered. Please use a different email.',
  'password.required': 'The password is required.',
  'password.minLength': 'The password must be at least 8 characters long.',
})
