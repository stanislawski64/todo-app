import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
})

export const useAuthToken = () => useContext(AuthContext).token

export const useLogin = () => useContext(AuthContext).login

export const useLogout = () => useContext(AuthContext).logout

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const initialToken = localStorage.getItem('token') || ''
  const [token, setToken] = useState(initialToken)

  const login = useCallback(() => {
    localStorage.setItem('token', 'authToken')
    setToken('authToken')
    navigate('/')
  }, [navigate])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/login')
  }, [navigate])

  const value = useMemo(
    () => ({ token, login, logout }),
    [token, login, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
