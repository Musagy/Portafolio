
import Layout from '../components/layout'
import Input from '../components/input'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Router from 'next/router'
import fbApp from '../database/firebase'
import { getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
const auth = getAuth(fbApp)
import { useAuth } from '../context/authContext'

const LogIn = () => {
  const { user } = useAuth()
  const {push} = Router
  const submitHandler = (e) => {
    e.preventDefault()
    const correo = e.target.Email.value
    const contraseña = e.target.Contraseña.value
    signInWithEmailAndPassword(auth, correo, contraseña)
    push("/")
  }
  return (
    <Layout>
      <div className="flex m-auto items-center">
        { user ?
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
        :
        <div className="mb-10">

          <div className="text-center text-5xl mb-6">
            <h1 className="inline text-teal-500 dark:text-white font-bold mr-4">
              ¿Eres yo?
            </h1>
            😳
          </div>
          <form onSubmit={submitHandler} method="post"
            className="
            flex flex-col drop-shadow-2xl
            w-96 gap-4 p-6 rounded-3xl
            bg-blueGray-300 dark:bg-blueGray-900 text-blueGray-700 dark:text-white font-semibold"
          >
            <Input type="email" title="Email" />
            <Input type="password" title="Contraseña" />
            <div>
              <button
              className="flex items-center gap-1 m-auto
                text-lg text-white font-bold
                bg-teal-500 shadow-lg hover:bg-teal-400
                px-3 py-2 rounded-xl
                right-5 -bottom-5 hover:translate-y-1 transition
              ">
                God mode <FaAngleDoubleRight/>
              </button>
            </div>
          </form>
        </div>
        }
      </div>
    </Layout>
  )
}

export default LogIn
