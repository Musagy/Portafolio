import Image from 'next/image'
import { useEffect, useState } from 'react'
import SkillsList from '../components/skillsList'
import Loading from '../components/loading'

import Layout from '../components/layout'
import yo from '../public/yo.png'

import fbApp from '../database/firebase'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'

const Habilidades = () => {
  const db = getFirestore(fbApp)
  const [skillsDesign, setSkillsDesign] = useState([])
  const [skillsFrondEnd, setSkillsFrondEnd] = useState([])

  useEffect(() => {
    const cltnSD = query(collection(db, 'skillsDesign'), orderBy("index", "asc"))
    onSnapshot(cltnSD, (snapshot) => {
      const listSD = []
      snapshot.forEach((doc) => {
        listSD.push({id:doc.id, ...doc.data()})
      })
      setSkillsDesign(listSD)
    })

    const cltnSFE = query(collection(db, 'skillsFrondEnd'), orderBy("index", "asc"))
    onSnapshot(cltnSFE, (snapshot) => {
      const listSFE = []
      snapshot.forEach((doc) => {
        listSFE.push({id:doc.id, ...doc.data()})
      })
      setSkillsFrondEnd(listSFE)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Layout>
      <div className="
        md:h-80 sm:h-80 h-96
      ">
        <div className="absolute
        bg-coolGray-200 dark:bg-blueGray-700
          w-full
          md:h-80 sm:h-80 h-96
          left-0 top-20
          transition-colors"
        />
        <div className="
          flex md:flex-row-reverse flex-col relative h-full
          m-4 md:m-0
          items-center md:justify-center justify-around
        ">
          <div className="rounded-full overflow-hidden 
          md:h-56 h-40
          w-40 md:w-auto 
          ">
            <div className="rounded-full dark:bg-blueGray-900 bg-blueGray-300">
            <Image
              src={yo}
              width={224}
              height={224}
              objectFit="cover"
              alt="fotografia"
            />
            </div>
          </div>
          <div className="md:w-80 md:mr-28 z-10">
            <p className="z-10 font-normal text-blueGray-700 dark:text-white">
              Hola, me llamo Diego Eduardo Musagy Casas. <br />
              Soy una persona a la que le gusta aprender cosas nuevas y tengo habilidad para ello. Aparte de eso soy alguien con pasión por el diseño minimalista.
            </p>
          </div>
          <div className="relative">
            <p className="
            absolute text-teal-500 text-giga md:-top-44 md:-left-14 md:opacity-60 opacity-0
            ">&ldquo;</p>
          </div>
        </div>
      </div>
        <br/>
        <div className="flex items-center gap-3">
          <div className="h-14 w-2.5 bg-teal-500" />
          <h1 className="text-4xl font-bold text-teal-500">Mis herramientas son:</h1>
        </div>
        { skillsDesign.length !== 0 && skillsFrondEnd.length !== 0 ?
          <>
            <SkillsList json={skillsDesign} nameList={"Diseño"}/>
            <SkillsList json={skillsFrondEnd} nameList={"Desarrollo web"}/>
          </>
          :
          <Loading/>
        }
    </Layout>
  )
}

export default Habilidades
