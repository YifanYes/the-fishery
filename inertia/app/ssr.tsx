import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import ThemeProvider from '~/context/ThemeContext'

export default function render(page: any) {
  const sheet = new ServerStyleSheet()

  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${name}.tsx`]
    },
    setup: ({ App, props }) =>
      sheet.collectStyles(
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      ),
  })
}
