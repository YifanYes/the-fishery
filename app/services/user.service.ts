import User from '#models/user'

export default class UserService {
  async getById(userId: string): Promise<User | null> {
    const template = await User.query().where('uuid', userId).first()
    return template
  }
}
