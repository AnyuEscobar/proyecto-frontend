import { Layout } from "../components/Layout"

const Register = () => {
  return (

    <Layout>
      <>
        <h4>Registrate!</h4>
        <form>
          <input type="text" placeholder="Ingrese su usuario" /> Usuario
          <input type="email" placeholder="Ingrese su email" />Email
          <button>Enviar</button>
        </form>
      </>
    </Layout>
  )
}

export { Register }