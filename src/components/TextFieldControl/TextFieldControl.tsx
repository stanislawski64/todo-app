import TextField from '@mui/material/TextField'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextFieldControlProps } from './TextFieldControl.interface'

export const TextFieldControl = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  id,
  label,
  type,
  error,
  helperText,
  fullWidth = true,
  required = false,
  autoFocus = false,
  multiline = false,
  variant = 'outlined',
}: UseControllerProps<T> & TextFieldControlProps) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <TextField
      {...field}
      label={label}
      id={id}
      type={type}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      required={required}
      autoFocus={autoFocus}
      multiline={multiline}
      variant={variant}
    />
  )
}
