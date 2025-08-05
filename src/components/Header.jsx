import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {

  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <header id="header-nav">
        <nav>
          <ul>
            {
              user && <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button onClick={handleLogout}>Cerrar sesión</button>
              </>
            }
            {
              !user && <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Registrate</Link></li>

              </>
            }
          </ul>
        </nav>
      </header>

    </>
  )
}

export { Header }