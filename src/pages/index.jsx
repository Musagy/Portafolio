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
import yo from '../public/yo.png'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import CreateBtn from '../components/createBtn'
import MessageList from '../components/messageList'
import { useAuth } from '../context/authContext'
import fbApp from '../database/firebase'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc
} from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(fbApp)


const Home = () => {
  const { user } = useAuth()
  
  const [message, setMessage] = useState([])
  const db = getFirestore(fbApp)

  const deleteMail = (id) => {
    // const db = getFirestore(fbApp)
    deleteDoc(doc(db, "mails", id))
  }

  useEffect(() => {
    if(user){
      const coll = collection(db, 'mails')
      const cltnMessage = query(coll, orderBy("date", "desc"))
      onSnapshot(cltnMessage, (snapshot) => {
        const listMessage = []
        snapshot.forEach((doc) => {
          listMessage.push({ id:doc.id, ...doc.data() })
        })
        setMessage(listMessage)
        console.log(message)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let skillsSvg = "sm:h-8 sm:w-8 h-7 w-7 fill-current text-blueGray-700 dark:text-white"
  return (
    <Layout>
      {
        user ?
        <>
          <div>
            <h1 className="
              text-teal-500 font-bold md:text-4xl text-center
              sm:text-6xl  
              text-5xl
            ">
              Bienvenido al god mode
            </h1>
            <div className="flex gap-8 justify-center">

              <MessageList json={message} deleteFuntion={deleteMail}/>

              <div className="flex flex-col w-96 justify-center items-center gap-6 text-xl">
                <CreateBtn name="Crear articulo" coll="posts" />
                <CreateBtn name="Crear skill" coll="skills" />
              </div>
            </div>
          </div>
          <button
          className="flex items-center gap-1 m-auto
            text-lg text-white font-bold
            bg-teal-500 shadow-lg hover:bg-teal-400
            px-3 py-2 rounded-xl
            right-5 -bottom-5 hover:translate-y-1 transition
          "
          onClick={() => signOut(auth)}>
            Salir del God mode
          </button>
        </> : <>
          <main className="flex flex-col sm:flex-row  justify-self-center md:gap-20 items-center h-full gap-6 sm:gap-14 justify-center">
            <div className="md:h-72 md:w-72 dark:bg-blueGray-900 bg-blueGray-300 rounded-full h-48 w-48 sm:h-60 sm:w-60 overflow-hidden">
              <Image 
                src={yo}
                alt="yo"
                objectFit="cover"
              />
            </div>
            <div className="md:w-96 text-center flex flex-col md:gap-7
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
              text-blueGray-700 md:text-2xl text-xl font-light
    
              dark:text-white
              ">
                Me llamo Diego Musagy, soy diseñador gráfico y desarrollador frontend.<br/>
                Y este es mi portafolio.
              </p>
              <button className="
              px-3 py-2 rounded-xl text-lg mx-auto font-semibold bg-blueGray-700 mt-7 md:m-auto
    
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
        </>
      }
    </Layout>
  )
}

export default Home