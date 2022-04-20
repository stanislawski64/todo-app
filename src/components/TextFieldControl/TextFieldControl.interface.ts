export interface TextFieldControlProps {
  id: string
  label: string
  type: React.HTMLInputTypeAttribute
  error?: boolean
  helperText?: React.ReactNode
  fullWidth?: boolean
  required?: boolean
  autoFocus?: boolean
  multiline?: boolean
  variant?: 'outlined' | 'standard' | 'filled'
}
