import React, {useState, useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated: auth0IsAuthenticated } = useAuth0()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(auth0IsAuthenticated)
  }, [auth0IsAuthenticated])

  return (
    <div>
      {isAuthenticated ? (
        <>
        <img src={user.picture} alt="Profile" id="account-icon" />
        <button onClick={()=>logout()} id="logoutButton">Logout</button>
        </>
      ) : (
        <button onClick={() => {loginWithRedirect()}} id="loginButton">Login</button>
      )
      }
    </div>
  )
};

export default LoginButton;