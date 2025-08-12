import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")


  // usercontext

  const { register } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    register(username, email, password)
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    // const newUser = {
    //   username,
    //   email,
    //   password
    // }
    //declaracion de register traído del userContext
    register()
    const isRegister = await register(username, email, password)
    console.log(username, email, password)

    if (isRegister) {
      setUsername("")
      setPassword("")
      setEmail("")
    }



    setSuccess("Usuario registrado con éxito")

    setUsername("")
    setEmail("")
    setPassword("")
  }

  return (
    <Layout>
      <h1>Registrate</h1>

      <section className="section-register">
        <h2>Hola, bienvenido</h2>
        <form className="form-register" onSubmit={handleSubmit}>
          <div>
            <label className="label-register">Username:</label>
            <input
              type="text" className="input-register"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label className="label-register">Correo electrónico:</label>
            <input className="input-register"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label className="label-register">Contraseña:</label>
            <input className="input-register"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="btn-register">Registrarme</button>
        </form>

        {
          error && <p style={{ color: "red" }}>{error}</p>
        }
        {
          success && <p style={{ color: "green" }}>{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Register }