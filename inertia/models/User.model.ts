import cookie from 'js-cookie'
import { Notification } from '~/services'
import Api from '~/services/Api.service'
import Config from '~/services/Config.service'
import BaseModel from './Base.model'

class User extends BaseModel {
  id: string
  email?: string
  username?: string

  constructor(values?: any) {
    super()
    this.id = values?.id || ''
    this.email = values?.email || ''
    this.username = values?.username || ''
  }

  async get({ setUser }: { setUser: (user?: User) => void }) {
    try {
      const id = cookie.get(Config.token)

      if (!id) {
        return
      }

      await Api.get(`/api/users/${id}`).then((res: any) => {
        this.fromApi(res.data.data)
        setUser(this)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async register({
    username,
    password,
    email,
  }: {
    username: string
    password: string
    email: string
  }) {
    try {
      await Api.post(`/api/register`, { username, password, email })
      Notification.success('¡Registro exitoso!')
    } catch (error) {
      console.log(error)
      Notification.error('Un error ocurrió al crear la cuenta, inténtalo de nuevo más tarde')
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      await Api.post(`/api/login`, { email, password }).then((res: any) => {
        cookie.set(Config.token, res.data.data)
        Notification.success('¡Bienvenido/a!')
      })
    } catch (error) {
      console.log(error)
      Notification.error('Un error ocurrió al acceder, inténtalo de nuevo más tarde')
    }
  }

  fromApi({ id, username, email }: { id: string; username: string; email: string }): this {
    this.id = id
    this.email = email
    this.username = username
    return this
  }
}

export default User
