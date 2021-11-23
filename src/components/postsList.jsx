import Image from 'next/image'

import { FaAngleDoubleRight } from 'react-icons/fa'
import lostImage from 'public/lost-image.svg'

const PostsList = ({json}) => {
  return (
    <div className="
      grid gap-x-6 gap-y-9 items-start
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
    ">
      {
        json.map(post =>{
          console.log(post)
          return(
            <div 
              key={post.id}
              className="relative
              rounded-3xl bg-blueGray-700 shadow-lg
              pb-3
            ">
              <div className="
              relative overflow-hidden
              md:h-48 md:w-full bg-blueGray-900 rounded-3xl h-48 pulse-ani
              ">
                <Image
                    src={post.banner?post.banner:lostImage}
                    layout="fill"
                    objectFit="cover"
                    alt="article image"
                />
              </div>
              <div className="flex flex-col p-3 gap-1">
                <h1 className="font-semibold text-2xl text-teal-500">
                  {post.title}
                </h1>
                <p className="font-light">
                  {post.desc}
                </p>
              </div>
              <button className="
                absolute 
                text-lg font-bold
                bg-teal-500 shadow-lg hover:bg-teal-400
                px-3 py-2 rounded-xl
                right-5 -bottom-5 hover:translate-y-1 transition
                ">
                <a className="flex items-center gap-1" href={post.article}>
                  Ver más <FaAngleDoubleRight/>
                </a>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostsList
