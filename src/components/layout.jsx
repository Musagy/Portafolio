import { useRouter } from 'next/router'
import Nav from '../components/nav'

const Layout = ({children}) => {
  const { asPath } = useRouter()
  let layoutClassDefault = "min-h-screen w-full overflow-x-hidden text-white transition-all"
  let layoutSelect
  if( asPath ===  "/"){
    layoutSelect = "inicio"
  } else if (asPath.includes("/article")) { 
    layoutSelect = "article"
  } else if (
    asPath.includes("portafolio") ||
    asPath.includes("contactos") ||
    asPath.includes("habilidades")) {
    layoutSelect = asPath.slice(1)
  } else {
    layoutSelect = "error"
  }

  return (
    <div className="dark:bg-coolGray-800">
      <div className={`${layoutClassDefault} ${layoutSelect}`}>
        {
          layoutSelect === "error"
          ?
          <main className="py-3 mx-auto max-w-4xl items">
            <div>
              {console.log(asPath)}
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
  )
}

export default Layout