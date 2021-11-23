import { useState, useRef } from 'react'
import fbApp from '../database/firebase'
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

const BoxColor = ({ col }) => {
  const style = ({backgroundColor: `#${col}`, width: "100%", height: "46px", borderRadius: "10px", border:"solid rgb(203, 213, 225) 4px"})
  return <div style={style}><div className=" w-56"/></div>
}
const Input = ({type, placeholder, value, onChange, name, disabled}) => {
  return(
    <input className="py-2 px-3 rounded-lg bg-blueGray-300 placeholder-blueGray-500 text-blueGray-700 font-medium disabled:opacity-50" type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} disabled={disabled}/>
  )
}

const ModalDelete = ({state, changeState, name, coll}) => {
  const [dateDisabled, setDateDisabled] = useState(true)
  const [skillSection, setSkillSection] = useState()
  const [color1, setColor1] = useState()
  const [color2, setColor2] = useState("")
  let btnDateDis, btnSD, btnSFE
  if(dateDisabled){
    btnDateDis = "bg-teal-500 hover:bg-teal-400"
  }else{
    btnDateDis = "bg-blueGray-800 hover:bg-blueGray-700"
  }
  if(skillSection === "skillsDesign"){
    btnSD = "bg-teal-500 hover:bg-teal-400"
    btnSFE = "bg-blueGray-800 hover:bg-blueGray-700"
  }else if(skillSection === "skillsFrondEnd"){
    btnSFE = "bg-teal-500 hover:bg-teal-400"
    btnSD = "bg-blueGray-800 hover:bg-blueGray-700"
  } else {
    btnSFE = "bg-blueGray-800 hover:bg-blueGray-700"
    btnSD = "bg-blueGray-800 hover:bg-blueGray-700"
  }
  const detecol1 = e => {
    const col1 = e.target.value
    setColor1(col1)
  }
  const detecol2 = e => {
    const col2 = e.target.value
    setColor2(col2)
  }

  // subida de archivo
  const [archivoUrl, setArchivoUrl] = useState("")
  const storage = getStorage(fbApp);

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0]
    if(coll === "posts"){
      const storageRef = ref(storage, `posts/${archivo.name}`)
      await uploadBytes(storageRef, archivo)
      const urlDescarga = await getDownloadURL(storageRef)
      setArchivoUrl(urlDescarga)
    } else {
      const storageRef = ref(storage, `${skillSection}/${archivo.name}`)
      await uploadBytes(storageRef, archivo)
      const urlDescarga = await getDownloadURL(storageRef)
      setArchivoUrl(urlDescarga)
    }
  }

  // creador a al base de datos
  const formulario = useRef()
  const db = getFirestore(fbApp)
  const submitHandler = async (e) => {
    e.preventDefault()
    if(coll === "posts"){
      const titulo = e.target.title.value
      const desc = e.target.desc.value
      const articulo = e.target.article.value
      // if(!dateDisabled){
      //   const fecha = e.target.date.value
      //   console.log(fecha.Timestamp())
      // }
      await addDoc(collection(db, coll), {
        title: titulo,
        desc: desc,
        article: articulo,
        banner: archivoUrl,
        date: serverTimestamp()
      })
    } else {
      const nombre = e.target.name.value
      const desc = e.target.desc.value
      const color1 = `#${e.target.col1.value}`
      const color2 = `#${e.target.col2.value}`
      const nivel = `${e.target.level.value}%`
      await addDoc(collection(db, skillSection), {
        name: nombre,
        desc: desc,
        icon: archivoUrl,
        col1: color1,
        col2: color2,
        level: nivel,
        index: serverTimestamp()
      })

    }
    console.log("se ha enviado correctamente el mensaje")
    changeState(false)
  }


  return (
    <>
      {
        state
        &&
        <div className="fixed bg-blueGray-900 bg-opacity-50 h-full w-full top-0 right-0 flex items-center rounded-lg">
          <form className="bg-white p-5 inline-flex flex-col mx-auto gap-3 rounded-3xl"
          onSubmit={submitHandler}
          method="post"
          ref={formulario}
          >
            <h1 className="font-bold text-2xl bg-white text-coolGray-600 inline-flex">
              {name}
            </h1>
            {
              coll === "posts" ?
              <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Titulo" name="title" />
                <Input type="text" placeholder="Descripción" name="desc" />
                <Input type="text" placeholder="Articulo completo" name="article" />
                <label htmlFor="banner" className="font-bold text-2xl text-coolGray-600 ml-7">
                  Banner
                </label>
                <Input
                  type="file"
                  onChange={archivoHandler}
                />
                <div className="flex items-center gap-2">
                  <button className={`h-6 w-6 rounded-md ${btnDateDis}`}
                  type="button"
                    onClick={() => setDateDisabled(!dateDisabled)}
                  />
                  <h2 className="font-bold text-2xl text-coolGray-600 inline-flex">
                  Fecha Automatica
                  </h2>
                </div>
                <Input type="date" name="date" disabled={dateDisabled} />
              </div>
              :
              <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Nombre" name="name" />
                <Input type="text" placeholder="Descripción" name="desc" />
                <Input type="text" placeholder="Nivel" name="level" />
                <div className="flex gap-2">
                  <Input
                    onChange={detecol1}
                    type="text"
                    name="col1"
                    placeholder="Color 1"
                  />
                  <BoxColor col={color1} />
                </div>
                <div className="flex gap-2">
                  <Input
                    onChange={detecol2}
                    type="text"
                    name="col2"
                    placeholder="Color 2"
                  />
                  <BoxColor col={color2} />
                </div>
                <label htmlFor="banner" className="font-bold text-2xl text-coolGray-600 ml-7">
                  Icono
                </label>
                <Input
                  type="file"
                  onChange={archivoHandler}
                  disabled={!skillSection}
                />
                <div className="flex justify-between mx-7 my-3">
                  <div className="flex items-center gap-2">
                    <input type="button" id="btnSD" className={`h-6 w-6 rounded-md ${btnSD}`}
                      onClick={() => setSkillSection("skillsDesign")}
                    />
                    <label htmlFor="btnSD" className="font-bold text-2xl text-coolGray-600 inline-flex">
                    Diseño
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="button" id="btnSFE" className={`h-6 w-6 rounded-md ${btnSFE}`}
                      onClick={() => setSkillSection("skillsFrondEnd")}
                    />
                    <label htmlFor="btnSFE" className="font-bold text-2xl text-coolGray-600 inline-flex">
                    Desarrollo Web
                    </label>
                </div>
                </div>
              </div>
            }
            
            
            <div className="flex justify-end gap-2">
              <button
                className="items-center hover:bg-coolGray-600 bg-coolGray-400 py-2 px-4 rounded-xl font-bold text-white"
                onClick={()=> changeState(false)}
              >
                Cancelar
              </button>
              <button
                className="items-center hover:bg-teal-400 bg-teal-500 text-white py-2 px-4 rounded-xl font-bold disabled:opacity-50 disabled:hover:bg-teal-500"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      }
    </>
  )
}

export default ModalDelete
