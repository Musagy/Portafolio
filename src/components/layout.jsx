import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../components/nav'

const Layout = ({children}) => {
  const { asPath, query } = useRouter()
  let layoutClassDefault = "min-h-screen max-w-5xl w-full grid px-4 mx-auto my-0 overflow-x-hidden text-white transition-all"
  let layoutSelect, titleSelect
  if( asPath ===  "/"){
    layoutSelect = "inicio"
    titleSelect = "Inicio"
  } else if (asPath.includes("/article")) { 
    layoutSelect = "article"
    titleSelect = `Articulo ${query.id}`
  } else if (
    asPath.includes("portafolio") ||
    asPath.includes("contactos") ||
    asPath.includes("habilidades")) {
    layoutSelect = asPath.slice(1)
    titleSelect = layoutSelect.charAt(0).toUpperCase() + layoutSelect.slice(1)
  } else {
    layoutSelect = "error"
    titleSelect = "Pagina no encontrada"
  }

  return (
    <>
      <Head>
        <title>
          {titleSelect} | Musagy
        </title>
      </Head>

      <div className="dark:bg-coolGray-800 transition-all">
        <div className={`${layoutClassDefault} ${layoutSelect}`}>
          {
            layoutSelect === "error"
            ?
            <main className="py-3 mx-auto max-w-4xl items">
              <div>
              </div>
              {children}
            </main>
            :
            <>
              <Nav/>
              {children}
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Layout