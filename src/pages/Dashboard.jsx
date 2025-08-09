import { Layout } from "../components/Layout"
import { useState } from "react"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    // petición al backend mediante fetch -> método POST https://fakeproductapi.com/products
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")
  }

  return (
    <Layout>
      <main>
        <h1>Panel de Administración</h1>

        <section className="section-dashboard">

          <form className="form-dashboard" onSubmit={handleSubmit}>
            <h2>Cargar nuevo producto</h2>
            <div>
              <label className="label-dashboard">Nombre del producto:</label>
              <input className="input-dashboard" type="text" name="nombre" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div>
              <label className="label-dashboard">Precio:</label>
              <input className="input-dashboard" type="number" name="precio" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>

            <div>
              <label className="label-dashboard">Descripción:</label>
              <textarea className="input-dashboard" name="descripcion" rows="4" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>

            {
              error && <p className="error">{error}</p>
            }

            <button className="btn-dashboard">Guardar producto</button>
          </form>

          {
            product && <div>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          }
        </section>
      </main>
    </Layout>
  )
}

export { Dashboard }