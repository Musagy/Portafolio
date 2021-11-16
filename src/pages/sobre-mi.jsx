import Image from 'next/image'
import { useEffect, useState } from 'react'
import SkillsList from '../components/skillsList'

import Layout from '../components/layout'
import lostImage from 'public/lost-image.png'

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
  // const a = collection(db, 'skillsDesign')
  useEffect(() => {
    const cltnSD = query(collection(db, 'skillsDesign'), orderBy("index", "asc"))
    onSnapshot(cltnSD, (snapshot) => {
      const listSD = []
      snapshot.forEach((doc) => {
        listSD.push(doc.data())
        // console.log(doc.data())
      })
      // console.log(listSnap)
      setSkillsDesign(listSD)
      console.log(skillsDesign)
    })

    const cltnSFE = query(collection(db, 'skillsFrondEnd'), orderBy("index", "asc"))
    onSnapshot(cltnSFE, (snapshot) => {
      const listSFE = []
      snapshot.forEach((doc) => {
        listSFE.push(doc.data())
        // console.log(doc.data())
      })
      // console.log(listSnap)
      setSkillsFrondEnd(listSFE)
      console.log(skillsFrondEnd)
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Layout>
      <div className="
        h-80 
      ">
        <div className="absolute
        bg-coolGray-300 dark:bg-blueGray-700
          w-full h-80 left-0 top-20
          transition-colors"
        />
        <div className="
          flex flex-row-reverse relative h-full
          items-center justify-center
        ">
          <div className="rounded-full overflow-hidden h-56">
            <Image
              src={lostImage}
              width={224}
              height={224}
              objectFit="cover"
              alt="fotografia"
            />
          </div>
          <div className="w-80 mr-28 z-10">
            <p className="z-10 font-light">
              Hola, me llamo Diego Eduardo Musagy Casas. <br />
              Soy una persona a la que le gusta aprender cosas nuevas y tener habilidad para ello. Aparte de eso soy alguien con pasión por el diseño minimalista.
            </p>
          </div>
          <div className="relative">
            <p className="
            absolute text-teal-500 text-giga -top-44 -left-14 opacity-60
            ">&ldquo;</p>
          </div>
        </div>
      </div>
        <br/>
        <div className="flex items-center gap-3">
          <div className="h-14 w-2.5 bg-teal-500" />
          <h1 className="text-4xl font-bold text-teal-500">Mis herramientas son:</h1>
        </div>
        <SkillsList json={skillsDesign} nameList={"Diseño"}/>
        <SkillsList json={skillsFrondEnd} nameList={"Desarrollo web"}/>
    </Layout>
  )
}

export default Habilidades
