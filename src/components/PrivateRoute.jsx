import { Navigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"


const PrivateRoute = ({ children }) => {

  const { user } = useAuth()

  //si no hay usuario, entonces redirigirlo a login

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export { PrivateRoute }