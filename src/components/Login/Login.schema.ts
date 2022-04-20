import * as yup from 'yup'

const loginSchema = yup.object({
  usernameEmail: yup
    .string()
    .label('Username / Email')
    .required()
    .min(4)
    .max(64)
    .default(''),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(4)
    .max(64)
    .default(''),
})

export default loginSchema
