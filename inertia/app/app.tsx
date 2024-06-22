import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'
import Toast from '~/components/atoms/modals/Toast'
import AuthProvider from '~/context/AuthContext'
import '../css/app.css'

const appName = import.meta.env.VITE_APP_NAME || 'The Fishery'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <AuthProvider>
        <App {...props} />
        <Toast />
      </AuthProvider>
    )
  },
})
