import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import { Home } from './routes/Home/Home'
import { Register } from './routes/Register/Register'
import { Login } from './routes/Login/Login'
import { ThemeProvider } from './theme/ThemeProvider'
import { IsLoggedIn } from './guards/IsLoggedIn/IsLoggedIn'
import { Layout } from './components/Layout/Layout'
import { AuthContextProvider } from './context/AuthContextProvider/AuthContextProvider'

export const App = () => {
  const Routes = () => {
    return useRoutes([
      {
        path: '/',
        element: (
          <IsLoggedIn>
            <Layout>
              <Home />
            </Layout>
          </IsLoggedIn>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/*',
        element: <Navigate to="/" />,
      },
    ])
  }

  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <Router>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Router>
    </ThemeProvider>
  )
}
