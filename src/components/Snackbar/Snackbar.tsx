import { Alert, Snackbar as MuiSnackbar } from '@mui/material'
import { SnackbarProps } from './Snackbar.interface'

export const Snackbar = ({
  severity,
  open,
  onClose,
  message,
}: SnackbarProps) => (
  <MuiSnackbar
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <Alert onClose={onClose} severity={severity} variant="filled">
      {message}
    </Alert>
  </MuiSnackbar>
)
