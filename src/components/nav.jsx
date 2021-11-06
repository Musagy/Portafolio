import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext, useState } from 'react'

import {
  BsFillMoonStarsFill,
  BsFillSunFill,
} from 'react-icons/bs'
import { ThemeContext } from '../context/themeContext'

const Nav = () => {

  // toggle dark mode
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? 'dark' : 'light')
  }

  // nav buttom responsive
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const stk = "absolute h-1 w-6 rounded-full bg-white transition-all "
  let stkAnm1,
      stkAnm2,
      stkAnm3,
      itemRpsv,
      itInicio,
      itPortafolio,
      itHabilidades,
      itContactos = ""
  let navRpsv = "hidden"
  let navDskt = "hover:bg-white hover:text-blueGray-700 md:hover:bg-blueGray-700 md:hover:text-white md:dark:hover:text-blueGray-700 md:dark:hover:bg-white md:p-0 md:hover:py-1 md:hover:px-2 md:w-auto md:rounded-lg  transition-all md:duration-300"

  if (open) {
    stkAnm1 = "transform scale-125 translate-y-2 rotate-45"
    stkAnm2 = "transform scale-125 rotate-45"
    stkAnm3 = "transform scale-125 -translate-y-2 -rotate-45"
    navRpsv= "flex flex-col right-0 top-16 items-start  drop-shadow-lg pb-2 rounded-2xl rounded-tr-md bg-blueGray-700 text-white"
    itemRpsv = " px-4 py-1 block w-full duration-150"
    itInicio = "pt-3 rounded-tr-md rounded-tl-2xl"
  }

  // Resaltado de subPage
  const { asPath } = useRouter()
  let pageSelect = "text-teal-500 text- font-bold "
  if( asPath ===  "/"){
    itInicio = `${itInicio} ${pageSelect}`
  } else if ( asPath.includes("/portafolio")) {
    itPortafolio = pageSelect
  } else if ( asPath.includes("/habilidades")) {
    itHabilidades = pageSelect
  } else if ( asPath.includes("/contactos")) {
    itContactos = pageSelect
  }

  return (
    <nav className="
      flex max-w-5xl relative
      justify-between items-center
      my-4 z-20
      "
    >
      <div 
        className="
          text-blueGray-700 text-5xl font-bold

          dark:text-white
        "
      >
        <Link href="/">
          <a><span className="text-teal-500">M</span>usagy</a>
        </Link>
        
      </div>

      <button className="relative h-10 w-10 bg-teal-500 rounded-xl
        flex flex-col justify-center items-center md:hidden"
        onClick={toggle}
      >
        <div
          className={`${stk} top-2.5 ${stkAnm1}`}
        />
        <div
          className={`${stk} ${stkAnm2}`}
        />
        <div
          className={`${stk} bottom-2.5 ${stkAnm3}`}
        />
      </button>

      <div className={`

        md:flex md:static md:gap-5 md:items-center md:flex-row md:bg-opacity-0
      md:text-blueGray-700 md:text-xl font-medium  md:rounded-none md:drop-shadow-none 


      dark:text-white
        text-3xl
        absolute ${navRpsv}`}
      >
        <Link href="/">
          <a className={`${itemRpsv} ${navDskt} ${itInicio}
          
          before:absolute before:bg-blueGray-700
          before:right-1.5 before:-top-3
          before:rounded-md
          before:rotate-45
          before:duration-150
          before:h-7
          before:w-7
          hover:before:bg-white
          md:before:hidden
          `}>Inicio</a>
        </Link>
        <Link href="/portafolio">
          <a className={`${itemRpsv} ${navDskt} ${itPortafolio}`}>Portafolio</a>
        </Link>
        <Link href="/habilidades">
          <a className={`${itemRpsv} ${navDskt} ${itHabilidades}`}>Habilidades</a>
        </Link>
        <Link href="/contactos">
          <a className={`${itemRpsv} ${navDskt} ${itContactos}`}>Contactos</a>
        </Link>
        <button className="
          relative
        bg-coolGray-800
          h-9 w-14 rounded-full
        border-blueGray-700 border-2
          md:scale-100 md:left-0 md:m-0
          dark:bg-white
          
          scale-150 left-28 mb-2 mt-3 mx-1
          "
        >
          <div className="
            flex absolute items-center top-0
          bg-white h-8 w-8 rounded-full 
          border-teal-500 border-2
            transition-all transform
            
            dark:translate-x-5
          dark:bg-blueGray-700
          ">
            <BsFillMoonStarsFill className="absolute mx-auto text-xl text-teal-500 left-1
            opacity-0 dark:opacity-100"/>
            <BsFillSunFill className="mx-auto text-xl text-teal-500 dark:opacity-0"/>
            <input
              className="absolute h-8 w-8 opacity-0"
              type="checkbox"
              checked={isDark()}
              onChange={e => toggleTheme(e)}
            />
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Nav