/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterUserController = () => import('#controllers/auth/register_user.controller')
const LoginController = () => import('#controllers/auth/login.controller')
import LogoutController from '#controllers/auth/logout.controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import './routes/private/templates.routes.js'

// Global matcher
router.where('id', router.matchers.uuid())

router.on('/').renderInertia('Home/index', { version: 6 })

router
  .group(() => {
    // Auth
    router.post('/register', [RegisterUserController])
    router.post('/login', [LoginController])

    router.post('/logout', [LogoutController]).use(
      middleware.auth({
        guards: ['api'],
      })
    )

    // Templates
  })
  .prefix('/api')
