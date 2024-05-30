import CreateTemplateController from '#controllers/templates/create_template.controller'
import GetTemplatesListController from '#controllers/templates/get_templates_list.controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', [GetTemplatesListController])
    router.post('/', [CreateTemplateController])
  })
  .prefix('/api/templates')
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
