import GetUserController from '#controllers/users/get_user.controller'
import UpdateUserController from '#controllers/users/update_user.controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/:id', [GetUserController])
    router.put('/:id', [UpdateUserController])
  })
  .prefix('/api/users')
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
