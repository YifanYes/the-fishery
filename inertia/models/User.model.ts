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

  fromApi({ id, username, email }: { id: string; username: string; email: string }): this {
    this.id = id
    this.email = email
    this.username = username
    return this
  }
}

export default User
