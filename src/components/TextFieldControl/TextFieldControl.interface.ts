import { HTMLInputTypeAttribute, ReactNode } from 'react'

export interface TextFieldControlProps {
  id: string
  label: string
  type: HTMLInputTypeAttribute
  error?: boolean
  helperText?: ReactNode
  fullWidth?: boolean
  required?: boolean
  autoFocus?: boolean
  multiline?: boolean
  variant?: 'outlined' | 'standard' | 'filled'
}
