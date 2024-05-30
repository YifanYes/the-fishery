import Template from '#models/template'

export default class TemplateService {
  async getById(templateId: string, userId: number): Promise<Template | null> {
    const template = await Template.query()
      .where('uuid', templateId)
      .where('user_id', userId)
      .first()

    return template
  }
}
