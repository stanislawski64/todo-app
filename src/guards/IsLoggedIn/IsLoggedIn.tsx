import { Navigate } from 'react-router-dom'
import { useAuthToken } from '../../context/AuthContextProvider/AuthContextProvider'

export const IsLoggedIn = ({ children }: { children: React.ReactNode }) =>
  useAuthToken() ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  )
