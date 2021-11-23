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
    asPath === "/portafolio" ||
    asPath === "/contactos" ||
    asPath === "/sobre-mi" ||
    asPath === "/login" ) { 
    layoutSelect = "sub-page"
    titleSelect = (asPath.slice(1).charAt(0).toUpperCase() + asPath.slice(1).slice(1)).replace("-", " ")
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
        <div className="dark:bg-coolGray-800 transition-colors">
          <div className={`${layoutClassDefault} ${layoutSelect}`}>
            {
              layoutSelect === "error"
              ?
              <main className="flex w-full justify-center items-center">
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