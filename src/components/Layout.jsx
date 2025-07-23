import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = (props) => {
  return (
    <Layout>
      <>
        <Header />

        <main>
          {props.children}
        </main>

        <Footer />
      </>
    </Layout>

  )
}

export { Layout }