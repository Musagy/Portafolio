import Nav from '../components/nav'

const Layout = ({children}) => {
  return (
    <div className="
      min-h-screen w-full overflow-x-hidden
    text-white 
      transition-all

      dark:bg-coolGray-800">
      <Nav/>
      <main className="py-3 mx-auto max-w-4xl items">
        {children}
      </main>
    </div>
  )
}

export default Layout