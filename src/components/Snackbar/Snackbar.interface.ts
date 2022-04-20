import { AlertColor } from '@mui/material'

export interface SnackbarProps {
  severity: AlertColor
  open: boolean
  onClose?: () => void
  message: string
}
