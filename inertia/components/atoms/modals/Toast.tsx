import { Toaster } from 'react-hot-toast'

const Toast = () => (
  <Toaster
    containerStyle={{
      zIndex: 999999,
    }}
    toastOptions={{
      position: 'bottom-center',
      style: {
        fontSize: '1.4rem',
        lineHeight: '2.2rem',
        maxWidth: '40rem',
        borderRadius: '6px',
      },
      success: {
        style: {
          background: '#00ff00',
          color: '#c0ffc0',
          boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
              rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
        },
      },
      error: {
        style: {
          background: '#ff0000',
          color: '#ffdbdb',
          boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
              rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
        },
      },
    }}
  />
)

export default Toast
