type TToastActions = {
  icon?: string
  label?: string
  color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link'
  onClick?: (e: MouseEvent | TouchEvent) => void
}

type TToastOptions = {
  title: string
  description?: string
  actions?: Array<TToastActions>
  error?: Error | string
}

function useNotification() {
  const toast = useToast()

  const confirmation = (options: TToastOptions) => toast.add({ ...options, color: 'primary', icon: 'i-fa-solid-exclamation-triangle' })
  const success = (options: TToastOptions) => toast.add({ ...options, color: 'success', icon: 'i-fa6-regular-circle-check' })
  const info = (options: TToastOptions) => toast.add({ ...options, color: 'info', icon: 'i-fa-regular-bell' })
  const warning = (options: TToastOptions) => toast.add({ ...options, color: 'warning', icon: 'i-fa6-solid-triangle-exclamation' })
  const error = (options: TToastOptions) => toast.add({ ...options, color: 'error', icon: 'i-fa6-solid-triangle-exclamation' })
  const clear = () => toast.clear()

  return {
    confirmation,
    success,
    info,
    warning,
    error,
    clear
  }
}

export default useNotification
