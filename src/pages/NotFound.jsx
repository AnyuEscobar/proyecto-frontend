import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
const NotFound = () => {
  return (
    <Layout>
      <>
        <h3>Página no encontrada </h3>
        <p>Vuelve al <Link to="/">INICIO</Link></p>
      </>
    </Layout>
  )
}

export { NotFound }