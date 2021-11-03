import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiAdobeillustrator,
  SiAdobephotoshop
} from 'react-icons/si'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import skills from 'public/skills.svg'

const Home = () => {
  let skillsSvg = "sm:h-8 sm:w-8 h-7 w-7 fill-current text-blueGray-700 dark:text-white"
  return (
    <Layout>
      <main className="flex flex-col sm:flex-row  justify-self-center md:gap-20 items-center h-full gap-6 sm:gap-14 justify-center">
        <div className="md:h-72 md:w-72 bg-blueGray-900 rounded-full h-48 w-48 sm:h-60 sm:w-60">
        </div>
        <div className="md:w-96 text-center flex flex-col gap-7
          sm:w-64 w-64
        ">
          <h1 className="
          text-teal-500 font-bold md:text-7xl

          sm:text-6xl  
          text-5xl
          ">
            ¡Hola!
          </h1>
          <p className="
          text-blueGray-700 text-2xl font-light

          dark:text-white
          ">
            Me llamo Diego Musagy, soy diseñador gráfico y desarrollador frontend.<br/>
            Y este es mi portafolio.
          </p>
          <button className="
          px-3 py-2 rounded-xl text-lg mx-auto font-semibold bg-blueGray-700

          transition-all

          hover:bg-teal-500 dark:hover:bg-teal-500 hover:scale-125
          ">
            <Link href="/portafolio">
              Ir a portafolio
            </Link>
          </button>
        </div>
      </main>
      <footer className="mx-auto flex gap-3 items-center">
        <SiAdobephotoshop className={skillsSvg}/>
        <SiAdobeillustrator className={skillsSvg}/>
        <SiHtml5 className={skillsSvg}/>
        <SiCss3 className={skillsSvg}/>
        <SiTailwindcss className={skillsSvg}/>
        <SiJavascript className={skillsSvg}/>
        <SiReact className={skillsSvg}/>
        <SiNextdotjs className={skillsSvg}/>
      </footer>
    </Layout>
  )
}

export default Home