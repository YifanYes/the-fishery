import CreateTemplateController from '#controllers/templates/create_template.controller'
import GetTemplateController from '#controllers/templates/get_template.controller'
import GetTemplatesListController from '#controllers/templates/get_templates_list.controller'
import UpdateTemplateController from '#controllers/templates/update_template.controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', [GetTemplatesListController])
    router.post('/', [CreateTemplateController])
    router.get('/:id', [GetTemplateController])
    router.put('/:id', [UpdateTemplateController])
    router.delete('/:id', [UpdateTemplateController])
  })
  .prefix('/api/templates')
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
