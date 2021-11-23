import {  FaTrashAlt } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import moment from 'moment'
import 'moment/locale/es'

const MessageList = ({ json, deleteFuntion }) => {
  return (
    <div className="w-69">
    <h1 className="font-semibold text-3xl text-blueGray-700 dark:text-white mb-3">Mensajes</h1>
    <div className="overflow-hidden rounded-2xl message-container shadow-lg">

      <div className="overflow-y-auto
        flex flex-col gap-5 items-start h-96 p-4 dark:bg-blueGray-900 bg-blueGray-200
        pb-7
      ">
        { 
        json.length !== 0 ?
          json.map(post =>{
            return(
              <div 
                key={post.uid}
                className="relative w-full
                rounded-xl dark:bg-blueGray-800 bg-white shadow-lg
              ">
                <div className="flex flex-col px-3 py-3">
                <div className="flex items-start gap-2 -mb-2 justify-between">
                  <p className="font-light text-tiny dark:text-blueGray-500 text-blueGray-400">
                  {post.email} - {post.phone} 
                  </p>
                  <h2 className="inline font-semibold text-sm dark:text-blueGray-700 text-blueGray-200">
                  {moment(post.date.toDate().toString()).calendar()}
                  </h2>
                  
                </div>
                    <h1 className="inline font-semibold text-3xl text-teal-500">
                      {post.name}
                    </h1>
                  <p className="font-base text-xl text-blueGray-700 dark:text-white mr-32">
                    {post.message}
                  </p>
                </div>
                <button 
                  onClick={() => deleteFuntion(post.id)}
                  className="
                  absolute flex items-center gap-1
                  text-lg font-bold
                  bg-red-400 shadow-lg hover:bg-red-500
                  px-3 pt-1.5 pb-2 rounded-xl
                  right-5 -bottom-3 hover:translate-y-1 transition
                ">
                  <FaTrashAlt/>
                  <p className="relative top-0.5">
                    Eliminar
                  </p>
                </button>
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
