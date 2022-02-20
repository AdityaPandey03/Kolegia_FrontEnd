import React from 'react'
import { Navigate} from 'react-router-dom'

export const PrivateRoute2 = ({ children}) => {
    const isLog=localStorage.getItem("jwt")?localStorage.getItem("jwt"):"";
    const isAuthenticated = isLog.length==0
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/dashboard" />
  }
