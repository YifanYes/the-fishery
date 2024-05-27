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
import router from '@adonisjs/core/services/router'

// Global matcher
router.where('id', router.matchers.uuid())

router.on('/').renderInertia('home', { version: 6 })

router
  .group(() => {
    router.post('/register', [RegisterUserController])
    router.post('/login', [LoginController])
  })
  .prefix('/api')
