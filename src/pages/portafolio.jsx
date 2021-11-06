import {
  AiFillCaretUp, 
  AiFillCaretDown, 
} from 'react-icons/ai'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Layout from '../components/layout'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

import lostImage from 'public/lost-image.png'


const Portafolio = () => {
  const [orden, setOrden] = useState(false)
  const changeOrden = () => setOrden(!orden)

  return (
    <Layout>
      <main className="flex flex-col gap-5 pb-11">
        <div className="
          flex
          flex-col md:flex-row-reverse
          items-center justify-center
          md:gap-10 gap-6 sm:gap-14
          md:h-80
        ">
          <div className="
            absolute md:object-fill md:relative md:rounded-3xl overflow-hidden
            md:h-64 md:max-w-sm md:w-full fade-image md:opacity-100
            sm:h-80 h-64
            top-20 md:top-0 w-full
            bg-gradient-to-b from-teal-500
          ">
            <Image
              src={lostImage} 
              alt="banner"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="
          text-center z-10
          md:max-w-sm
          
          mt-52 sm:mt-64 md:mt-0 pb-5 md:p-0
          ">
            <p className="
            text-blueGray-700 text-3xl font-light

            dark:text-white
            ">
              <span className="text-teal-500 font-semibold">Bienvenido</span> a mi portafolio, acá se mostrarán mis <span className="text-teal-500 font-semibold">proyectos</span> favoritos que he tenido en toda mi <span className="text-teal-500 font-semibold">carrera</span>.
            </p>
          </div>

        </div>


        <div className="inline-flex items-center gap-3 text-2xl self-end">
          <p className="dark:text-white text-blueGray-700">
            Ordenar por:
          </p>
          <button 
            className="flex items-center gap-2
            px-3 py-2 rounded-xl text-lg mx-auto
            font-semibold
          bg-blueGray-700 w-44 justify-center

            transition-all active:scale-110

          hover:bg-teal-500"
            onClick={changeOrden}
          >
            {
              orden
              ?
              <>Más reciente <AiFillCaretUp/></>
              :
              <>Más antiguos <AiFillCaretDown/></>
            }
          </button>
        </div>


        <div className="
          grid gap-x-6 gap-y-9 items-start
          md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        ">
          {
            [1,2,3,4,5].map((path) =>{
              return(
                <div 
                  key={path}
                  className="relative
                  rounded-3xl bg-blueGray-700 shadow-lg
                  pb-3
                ">
                  <div className="
                  relative overflow-hidden
                  md:h-48 md:w-full bg-blueGray-900 rounded-3xl h-48
                  ">
                    <Image
                        src={lostImage} 
                        layout="fill"
                        objectFit="cover"
                        alt="article image"
                    />
                  </div>
                  <div className="flex flex-col p-3 gap-1">
                    <h1 className="font-semibold text-xl text-teal-500">
                      Hola ¿Como estas?
                    </h1>
                    <p className="font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis reiciendis, maxime at ea eius! Illo eveniet aut 
                    </p>
                  </div>
                  <button className="
                    absolute flex items-center gap-1
                    text-lg font-bold
                    bg-teal-500 shadow-lg hover:bg-teal-400
                    px-3 py-2 rounded-xl
                    right-5 -bottom-5 hover:translate-y-1 transition
                  ">
                    Ver más <FaAngleDoubleRight/>
                  </button>
                </div>
              )
            })
          }
        </div>
      </main>
    </Layout>
  )
}

export default Portafolio
