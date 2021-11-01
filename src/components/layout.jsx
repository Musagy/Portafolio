import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Nav from '../components/nav'

const Layout = ({children}) => {
  const { asPath } = useRouter()
  let layoutClassDefault = "min-h-screen w-full overflow-x-hidden text-white transition-all dark:bg-coolGray-800"
  let layoutSelect
  if( asPath ===  "/"){
    layoutSelect = "inicio"
  } else if (asPath.includes("/article")) { 
    layoutSelect = "article"
  }else {
    layoutSelect = asPath.slice(1)
  }
  const layoutClass = `${layoutClassDefault} ${layoutSelect}`

  return (
    <div className={layoutClass}>
      <Nav/>
      <main className="py-3 mx-auto max-w-4xl items">
        {children}
      </main>
    </div>
  )
}

export default Layout