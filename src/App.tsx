import { BrowserRouter as Router, useRoutes, Navigate } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import ThemeProviders from './components/theme/ThemeProviders/ThemeProviders'
import IsLoggedIn from './components/IsLoggedIn/IsLoggedIn'
import Layout from './components/Layout/Layout'
import AuthContextProvider from './components/AuthContextProvider/AuthContextProvider'

const App = () => {
  const Routes = () => {
    const routes = useRoutes([
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
    return routes
  }

  return (
    <ThemeProviders>
      <CssBaseline enableColorScheme />
      <Router>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </Router>
    </ThemeProviders>
  )
}

export default App
