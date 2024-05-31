import { Toaster } from 'sonner'

export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'

export type ToastType =
  | 'message'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'dismiss'
  | 'custom'
  | 'loading'

const Toast = ({
  className,
  expand,
  richColors,
  position,
  canClose,
}: {
  className?: string
  expand?: boolean
  richColors?: boolean
  position?: ToastPosition
  canClose?: boolean
}) => {
  return (
    <Toaster
      {...(className ? { className } : {})}
      {...(canClose ? { closeButton: canClose } : {})}
      {...(expand ? { expand } : {})}
      {...(richColors ? { richColors } : {})}
      {...(position ? { position } : {})}
    />
  )
}

export default Toast
