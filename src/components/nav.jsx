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
  let stkAnm1 = ""
  let stkAnm2 = ""
  let stkAnm3 = ""
  if (open) {
    stkAnm1 = "transform scale-125 translate-y-2 rotate-45"
    stkAnm2 = "transform scale-125 rotate-45"
    stkAnm3 = "transform scale-125 -translate-y-2 -rotate-45"
  }
  const stk1 = `${stk} top-2.5 ${stkAnm1}`
  const stk2 = `${stk} ${stkAnm2}`
  const stk3 = `${stk} bottom-2.5 ${stkAnm3}`

  return (
    <nav className="
      flex max-w-5xl mx-auto
      justify-between items-center
      my-4
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
          className={stk1}
        />
        <div
          className={stk2}
        />
        <div
          className={stk3}
        />
      </button>

      <div className="
        hidden

        md:flex gap-5 items-center
        text-blueGray-700 text-xl font-medium

        dark:text-white
        

      ">
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/portafolio">
          <a>Portafolio</a>
        </Link>
        <Link href="/habilidades">
          <a>Habilidades</a>
        </Link>
        <Link href="/contactos">
          <a>Contactos</a>
        </Link>
        <button className="
          relative
        bg-coolGray-800
          h-9 w-14 rounded-full
        border-blueGray-700 border-2
          
          dark:bg-white
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