import { useState } from 'react'
import { MdAddCircle } from 'react-icons/md'
import ModalCreate from './modalCreate'

const CreateBtn = ({ name, coll }) => {
  const [modal, setModal] = useState(false)
  // const db = getFirestore(fbApp)

  // const submitHandler = async (e) => {
  //   e.preventDefault()
  //   const nombre = e.target.Nombre.value
  //   const email = e.target.Email.value
  //   const telefono = e.target.Teléfono.value
  //   const mensaje = e.target.Mensaje.value
  //   await addDoc(collection(db, "mails"), {
  //     name: nombre,
  //     email: email,
  //     phone: telefono,
  //     message: mensaje,
  //     date: serverTimestamp()
  //   })
  //   e.target.Nombre.value = ""
  //   e.target.Email.value = ""
  //   e.target.Teléfono.value = ""
  //   e.target.Mensaje.value = ""
  //   console.log("se ha enviado correctamente el mensaje")
  // }
  return (
    <div>
      <button
      onClick={() => setModal(!modal)}
        className="
        flex items-center gap-1
          text-white font-bold
        bg-teal-500 shadow-lg hover:bg-teal-400
        px-3 py-2 rounded-xl
        right-5 -bottom-5 hover:translate-y-1 transition
      ">
          <MdAddCircle/>{name}
      </button>
      <ModalCreate state={modal} changeState={setModal} name={name} coll={coll}/>
    </div>
  )
}

export default CreateBtn
