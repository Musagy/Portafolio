import { createContext, useState, useEffect, useContext } from "react"
import fbApp from '../database/firebase'
import { getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth'
const auth = getAuth(fbApp)

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const isUser = async() => {onAuthStateChanged(auth, userFB => {
      if(userFB) {
          setUser(userFB)
      } else {
          setUser(null)
      }
    })}
    isUser()
    console.log(user)
  }, [user])

  // const startLogin = (e) => {
  //   signInWithEmailAndPassword(auth, correo, contraseña)
  // }
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}