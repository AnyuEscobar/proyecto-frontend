import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
    }
  }

  return (
    <Layout>
      <h1>Inicia sesión</h1>

      <section className="section-login">
        <h2>Hola! <br />
          Bienvenido de nuevo</h2>
        <form className="form-login" onSubmit={handleLogin}>
          <div>
            <label className="label-login">Nombre de usuario:</label>
            <input className="login-input"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} />
          </div>
          <div>
            <label className="label-login">Contraseña:</label>
            <input
              type="password" className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </div>
          <button className="btn-login">Ingresar</button>
          <p>¿No tienes una cuenta? <Link to="/register" >Registrate</Link></p>
          <br />
          <p>Usuario autorizado: <br />johnd, m38rmF$</p>
        </form>
      </section>
    </Layout>
  )
}


export { Login }