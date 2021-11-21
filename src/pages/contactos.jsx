import { FaAngleDoubleRight } from 'react-icons/fa'
import Layout from '../components/layout'
import Input from '../components/input'
import { useRef } from 'react'
import fbApp from '../database/firebase'
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore"; 

const Contactos = () => {
  const db = getFirestore(fbApp)
  const formulario = useRef()

  const submitHandler = async (e) => {
    e.preventDefault()
    const nombre = e.target.Nombre.value
    const email = e.target.Email.value
    const telefono = e.target.Teléfono.value
    const mensaje = e.target.Mensaje.value
    await addDoc(collection(db, "mails"), {
      name: nombre,
      email: email,
      phone: telefono,
      message: mensaje,
      date: serverTimestamp()
    })
    formulario.current.reset()
    console.log("se ha enviado correctamente el mensaje")
  }

  return (
    <Layout>
      <div className="flex m-auto gap-11 items-center">
        <div className="text-blueGray-700 dark:text-white mb-10">

          <h1 className="text-teal-500 dark:text-white text-4xl font-bold text-center">Mensaje directo</h1>
          <form onSubmit={submitHandler} 
            method="post"
            ref={formulario}
            className="
            flex flex-col drop-shadow-2xl
            w-96 gap-4 p-6 rounded-3xl
            bg-blueGray-300 dark:bg-blueGray-900 text-blueGray-700 dark:text-white font-semibold"
          >
            <Input type="text" title="Nombre" />
            <Input type="text" title="Email" />
            <Input type="text" title="Teléfono" />
            <Input title="Mensaje" />
            <div>
              <button
              className="flex items-center gap-1 m-auto
                text-lg text-white font-bold
                bg-teal-500 shadow-lg hover:bg-teal-400
                px-3 py-2 rounded-xl
                right-5 -bottom-5 hover:translate-y-1 transition
              ">
                Enviar <FaAngleDoubleRight/>
              </button>
            </div>
          </form>
        </div>

        {/* otros metodos */}
        <div className="text-blueGray-700 dark:text-white">
          <h1 className="text-blueGray-700 dark:text-white text-4xl font-bold text-center mb-4">
            Otros métodos
          </h1>
          <button className="
            flex items-center gap-1
            text-lg text-white font-bold
            bg-teal-500 shadow-lg hover:bg-teal-400
            px-3 py-2 rounded-xl
            right-5 -bottom-5 hover:translate-y-1 transition mx-auto
          ">
            <a href="https://wa.me/+51934183131" without rel="noreferrer" target="_blank">
              Whatsapp
            </a>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Contactos
