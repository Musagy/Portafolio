import Image from 'next/image'

import { FaAngleDoubleRight } from 'react-icons/fa'
import lostImage from 'public/lost-image.png'
import { HiOutlineMailOpen } from 'react-icons/hi'

const MessageList = ({json}) => {
  return (
    <div className="w-full">
    <h1 className="font-semibold text-3xl text-blueGray-700 dark:text-white mb-3">Mensajes</h1>
    <div className="overflow-hidden rounded-2xl message-container shadow-lg">

      <div className="
        flex flex-col gap-2 items-start w-full h-96 p-4 dark:bg-blueGray-900 bg-blueGray-200
      ">
        { 
        json.length !== 0 ?
          json.map(post =>{
            return(
              <div 
                key={post.uid}
                className="relative w-full
                rounded-xl dark:bg-blueGray-800 bg-white shadow-lg
                pb-3
              ">
                <div className="flex flex-col p-3 gap-1">
                  <div className="flex items-center gap-2">
                    <h1 className="inline font-semibold text-2xl text-teal-500">
                      {post.name}
                    </h1>
                    <h2 className="inline font-semibold text-sm dark:text-blueGray-700 text-blueGray-300">
                      {post.phone} - {post.email}
                    </h2>
                    
                  </div>
                  <p className="font-light text-blueGray-700 dark:text-white">
                    {post.message}
                  </p>
                  <p className="font-light text-blueGray-700 dark:text-white">
                    {post.date.toDate().toString()}
                  </p>
                </div>
              </div>
            )
          })
          :
          <div className="font-semibold text-4xl text-blueGray-700 flex flex-col mx-auto text-center justify-center h-full items-center mb-6">
            <h1>No hay mensajes</h1>
            <HiOutlineMailOpen className="text-7xl "/>
          </div>
        }
      </div>
    </div>
    </div>
  )
}

export default MessageList
