import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
      <h3>Página no encontrada </h3>
      <p>Vuelve al <Link to="/">INICIO</Link></p>
    </>
  )
}

export { NotFound }