import { Layout } from "../components/Layout"

const Login = () => {
  return (

    <Layout>
      <form>
        <input type="text" placeholder="Ingrese su usuario" />Usuario
        <input type="text" placeholder="Ingrese su email" />Email
        <button>Ingresar</button>
      </form>

    </Layout>

  )
}

export { Login }