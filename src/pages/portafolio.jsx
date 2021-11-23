import {
  AiFillCaretUp, 
  AiFillCaretDown, 
} from 'react-icons/ai'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import PostsList from '../components/postsList'
import PostsLoading from '../components/postsLoading'
import Image from 'next/image'
import banner from '../public/portafolio-banner.svg'

import fbApp from '../database/firebase'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'


const Portafolio = () => {
  const db = getFirestore(fbApp)
  const [posts, setPosts] = useState([])
  const [orden, setOrden] = useState("desc")
  const changeOrden = () => {
    if (orden === "desc"){
      setOrden("asc")
      console.log("esta ascendiente")
    } else {
      console.log("esta descendiente")
      setOrden("desc")
    }
  }

  useEffect(() => {
    const cltnPosts = query(collection(db, 'posts'), orderBy("date", orden))
    onSnapshot(cltnPosts, (snapshot) => {
      const listPost = []
      snapshot.forEach((doc) => {
        listPost.push({id:doc.id, ...doc.data()})
      })
      setPosts(listPost)
      console.log(posts)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[orden])

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
              src={banner} 
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
              orden === "desc"
              ?
              <>Más reciente <AiFillCaretUp/></>
              :
              <>Más antiguos <AiFillCaretDown/></>
            }
          </button>
        </div>

        { posts.length !== 0 ?
          <PostsList json={posts}/>
          :
          <PostsLoading/>
        }
      </main>
    </Layout>
  )
}

export default Portafolio
