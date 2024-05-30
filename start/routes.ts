/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterUserController = () => import('#controllers/auth/register_user_controller')
const LoginController = () => import('#controllers/auth/login_controller')
import LogoutController from '#controllers/auth/logout_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import './routes/private/templates.ts'

// Global matcher
router.where('id', router.matchers.uuid())

router.on('/').renderInertia('home', { version: 6 })

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
