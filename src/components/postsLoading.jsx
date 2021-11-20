import Image from 'next/image'

import { FaAngleDoubleRight } from 'react-icons/fa'
import lostImage from 'public/lost-image.png'

const PostsLoading = () => {
  return (
    <div className="
      grid gap-x-6 gap-y-9 items-start
      md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
    ">
      {
        [1,2,3,4,5,6].map(post =>{
          return(
            <div 
              key={post}
              className="relative 
              rounded-3xl bg-blueGray-700 shadow-lg
              pb-3
            ">
              <div className="pulse-ani
              relative overflow-hidden
              md:h-48 md:w-full bg-blueGray-900 rounded-3xl h-48
              ">
              </div>
              <div className="flex flex-col m-3 gap-3 overflow-hidden mb-6">
                <div className="rounded-full overflow-hidden">
                  <div className="h-6 w-56 rounded-full bg-blueGray-900 pulse-ani"/>
                  
                </div>
                <div className="flex flex-col gap-2 ">
                  <div className="h-4 w-full rounded-full bg-blueGray-900 pulse-ani"/>
                  <div className="h-4 w-56 rounded-full bg-blueGray-900 pulse-ani"/>
                </div>
              </div>
              <button className="
                absolute flex items-center gap-1
                text-lg font-bold text-teal-500
                bg-teal-500 shadow-lg hover:text-teal-400 hover:bg-teal-400
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
  )
}

export default PostsLoading
