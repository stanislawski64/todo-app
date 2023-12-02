import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'

import { useAuthToken } from '../../context/AuthContextProvider/AuthContextProvider'

export const IsLoggedIn = ({ children }: { children: ReactNode }) =>
  useAuthToken() ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  )
