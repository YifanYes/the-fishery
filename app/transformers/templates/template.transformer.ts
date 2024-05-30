import Template from '#models/template'
import { TemplateType } from '#types/template.types'

const TemplateTransformer = ({ uuid, type, content, created_at }: Template): TemplateType => ({
  id: uuid,
  type,
  content,
  created_at,
})

export default TemplateTransformer
