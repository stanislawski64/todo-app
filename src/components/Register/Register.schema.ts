import * as yup from 'yup'

const lowercase = /(?=.*[a-z])/
const uppercase = /(?=.*[A-Z])/
const numeric = /(?=.*[0-9])/
const alphanumeric = /^[a-zA-Z0-9]+$/

const registerSchema = yup.object({
  email: yup
    .string()
    .label('Email')
    .required()
    .email()
    .min(4)
    .max(64)
    .default(''),
  username: yup
    .string()
    .label('Username')
    .required()
    .min(4)
    .max(64)
    .default('')
    .matches(
      alphanumeric,
      ({ path }) => `${path} can only contain letters and numbers`
    ),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(4)
    .max(64)
    .matches(lowercase, ({ path }) => `${path} must contain a lowercase letter`)
    .matches(
      uppercase,
      ({ path }) => `${path} must contain an uppercase letter`
    )
    .matches(numeric, ({ path }) => `${path} must contain a number`)
    .default(''),
  confirmPassword: yup
    .string()
    .label('Confirm Password')
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .default(''),
})

export default registerSchema
