import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import Layout from '../components/layout'

const Contactos = () => {
  return (
    <Layout>
      <h1 className="text-blueGray-700 text-center font-bold text-2xl dark:text-white">
        <AiFillCaretRight className="inline"/> hola, estos son mis contactos <AiFillCaretLeft className="inline"/></h1>
    </Layout>
  )
}

export default Contactos
