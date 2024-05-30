import CreateTemplateController from '#controllers/templates/create_template_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/templates', [CreateTemplateController]).use(
      middleware.auth({
        guards: ['api'],
      })
    )
  })
  .prefix('/api')
