import { Layout } from "../components/Layout"



const AboutUs = () => {
  return (
    <Layout>
      <>
        <section className="about-us">
          <section className="card-aboutus">
            <h2>¿De qué trata este proyecto?</h2>

            <p> Este es un proyecto de e-commerce desarrollado como parte del curso de Frontend. Se trata de una tienda online completa que simula una experiencia real de compra con funcionalidades de autenticación y gestión de productos. El proyecto demuestra las mejores prácticas de desarrollo frontend, incluyendo gestión de estado, routing, formularios validados y diseño responsive.</p>


          </section>
          <section className="card-aboutus">
            <h2>Nuestro público</h2>
            <p>Esta tienda está dirigida para cualquiera que quiera interiorizarse en el mundo de la programación ya que se usa un poco de cada cosa: html, css, javascript, react y un poco de backend.</p>
            {/* <i className='bx bx-desktop' style={{ color: '#e77ead', fontSize: '2rem' }}
          ></i> */}
          </section>
          <section className="card-aboutus">
            <h2>¿Qué tecnologias se usaron?</h2>
            {/* <i className='bx bx-desktop' style={{ color: '#e77ead', fontSize: '2rem' }}
            ></i> */}
            <p>Frontend: React 19, React Router DOM, Vite</p>

            <p>Estilos: CSS moderno con variables, Grid y Flexbox, diseño responsive</p>

            <p>APIs: FakeStoreAPI para productos y autenticación</p>

            <p> Enfoques: Componentes funcionales, Hooks, Context API, formularios controlados y validación en tiempo real</p>

          </section>
        </section>


      </>
    </Layout >
  )
}

export { AboutUs }