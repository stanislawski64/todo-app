import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthToken } from '../AuthContextProvider/AuthContextProvider'

const IsLoggedIn: React.FC = ({ children }) =>
  useAuthToken() ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  )
export default IsLoggedIn
