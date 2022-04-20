import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { RegisterInterface } from './Register.interface'
import registerSchema from './Register.schema'
import useStyles from './Register.styles'
import TextFieldControl from '../TextFieldControl/TextFieldControl'
import { useLogin } from '../AuthContextProvider/AuthContextProvider'

const Register: React.FC = () => {
  const navigate = useNavigate()
  const login = useLogin()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInterface>({
    defaultValues: registerSchema.getDefault(),
    resolver: yupResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterInterface> = ({
    confirmPassword,
    ...rest
  }) => {
    // eslint-disable-next-line no-console
    console.log(rest)
    navigate('/login', { state: { successfulRegistration: true } })
  }

  const { classes } = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Avatar className={classes.lockIcon} color="primary">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="textPrimary">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          mt={3}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldControl
                name="email"
                control={control}
                id="email"
                label="Email"
                type="text"
                error={!!errors.email}
                helperText={errors.email?.message}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldControl
                name="username"
                control={control}
                id="username"
                label="Username"
                type="text"
                error={!!errors.username}
                helperText={errors.username?.message}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldControl
                name="password"
                control={control}
                id="password"
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldControl
                name="confirmPassword"
                control={control}
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box display="flex" justifyContent="space-between">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              onClick={() => {
                login()
              }}
              sx={{ cursor: 'pointer' }}
              color="primary"
              variant="body2"
              underline="hover"
            >
              Skip to page
            </Link>
            <Link
              component={RouterLink}
              to="/login"
              color="primary"
              variant="body2"
              underline="hover"
            >
              Already have an account? Sign in
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Register
