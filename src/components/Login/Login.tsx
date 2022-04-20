import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
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
import { useState, useEffect } from 'react'
import { LoginInterface, LoginLocationState } from './Login.interface'
import loginSchema from './Login.schema'
import useStyles from './Login.styles'
import TextFieldControl from '../TextFieldControl/TextFieldControl'
import Snackbar from '../Snackbar/Snackbar'
import {
  useAuthToken,
  useLogin,
} from '../AuthContextProvider/AuthContextProvider'

const Login: React.FC = () => {
  const [successfulRegistration, setSuccessfulRegistration] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const login = useLogin()
  const token = useAuthToken()

  useEffect(() => {
    if (token) navigate('/')
    const locationState = location.state as LoginLocationState
    if (locationState) {
      if (locationState.successfulRegistration) setSuccessfulRegistration(true)
      navigate(location.pathname, {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>({
    defaultValues: loginSchema.getDefault(),
    resolver: yupResolver(loginSchema),
  })

  const isEmail = (usernameEmail: string) => /@/.test(usernameEmail)

  const onSubmit: SubmitHandler<LoginInterface> = (data) => {
    // eslint-disable-next-line no-console
    console.log('isEmail', isEmail(data.usernameEmail))
    // eslint-disable-next-line no-console
    console.log('data', data)
    login()
  }

  const { classes } = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Avatar className={classes.lockIcon} color="primary">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="textPrimary">
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          mt={3}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldControl<LoginInterface>
                name="usernameEmail"
                control={control}
                id="usernameEmail"
                label="Username / Email"
                type="text"
                error={!!errors.usernameEmail}
                helperText={errors.usernameEmail?.message}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldControl<LoginInterface>
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
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
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
              to="/register"
              color="primary"
              variant="body2"
              underline="hover"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </Box>
        </Box>
      </Box>
      <Snackbar
        severity="success"
        open={successfulRegistration}
        onClose={() => setSuccessfulRegistration(false)}
        message="You have successfully registered."
      />
    </Container>
  )
}

export default Login
