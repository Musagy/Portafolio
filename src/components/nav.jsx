import Link from 'next/link'
import { useState, useContext } from 'react'

import {
  BsFillSunFill,
  BsFillMoonStarsFill,
} from 'react-icons/bs'
import { ThemeContext } from '../context/themeContext'

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? 'dark' : 'light')
  }
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
      <div className="
        flex gap-5 items-center
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
            <input
              className="absolute h-8 w-8 opacity-0"
              type="checkbox"
              checked={isDark()}
              onChange={e => toggleTheme(e)}
            />
            {
              theme === "dark"
              ? <BsFillMoonStarsFill className="mx-auto text-xl text-teal-500"/>
              : <BsFillSunFill className="mx-auto text-xl text-teal-500"/>
            }
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Nav