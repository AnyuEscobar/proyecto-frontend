import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Home = () => {
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")
  const [search, setSearch] = useState('')
  //estos son los estados que voy a usar en el buscador
  const [results, setResults] = useState([])

  const { user } = useAuth()

  const fetchingProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error("Error al cargar productos:", error)
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prev => prev.filter(product => product.id !== id))
      setResults(prev => prev.filter(product => product.id !== id)) // actualizar también resultados si hay búsqueda
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prev => prev.map(product => product.id === data.id ? data : product))
        setResults(prev => prev.map(product => product.id === data.id ? data : product))
        setShowPopup(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // handleChange para el input de búsqueda
  const handleChange = async (e) => {
    const valor = e.target.value
    setSearch(valor)

    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    const filtrados = data.filter(product =>
      product.title.toLowerCase().includes(valor.toLowerCase())
    )
    setResults(filtrados)
  }

  const productosVisibles = search.trim() !== '' ? results : products

  return (
    <Layout>
      <section>
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section>
        <h2>¿Por qué elegirnos?</h2>
        <ul>
          <li className="p-card">
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li className="p-card">
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li className="p-card">
            <h3>Atención personalizada</h3>
            <p>Estamos disponibles para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Nuestros productos</h2>
        <input type="text" placeholder="Buscar..." onChange={handleChange} />

        {
          showPopup && (
            <section className="popup-edit">
              <h2>Editando producto.</h2>
              <button onClick={() => setShowPopup(null)}>Cerrar</button>
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  placeholder="Ingrese el titulo"
                  value={titleEdit}
                  onChange={(e) => setTitleEdit(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Ingrese el precio"
                  value={priceEdit}
                  onChange={(e) => setPriceEdit(e.target.value)}
                />
                <textarea
                  placeholder="Ingrese la descripción"
                  value={descriptionEdit}
                  onChange={(e) => setDescriptionEdit(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Ingrese la categoria"
                  value={categoryEdit}
                  onChange={(e) => setCategoryEdit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Ingrese la URL de la imagen"
                  value={imageEdit}
                  onChange={(e) => setImageEdit(e.target.value)}
                />
                <button>Actualizar</button>
              </form>
            </section>
          )
        }

        <div id="products-grid">
          {
            productosVisibles.length > 0 ? (
              productosVisibles.map((product) => (
                <div className="products" key={product.id}>
                  <h2 className="p-title">{product.title}</h2>
                  <img className="product-img" width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
                  <p className="p-price">${product.price}</p>
                  <p className="p-description">{product.description}</p>
                  <p className="p-category"><strong>{product.category}</strong></p>
                  {
                    user && (
                      <div>
                        <button onClick={() => handleOpenEdit(product)}>Actualizar</button>
                        <button onClick={() => handleDelete(product.id)}>Borrar</button>
                      </div>
                    )
                  }
                </div>
              ))
            ) : (
              search.trim() !== '' && <p>No se encontraron productos que coincidan con la búsqueda.</p>
            )
          }
        </div>
      </section>
    </Layout>
  )
}

export { Home }
