import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import Layout from '../components/layout'

const Portafolio = () => {
  return (
    <Layout>
      <h1 className="text-blueGray-700 text-center font-bold text-2xl dark:text-white">
        <AiFillCaretRight className="inline"/> hola, este es el portafolio <AiFillCaretLeft className="inline"/></h1>
    </Layout>
  )
}

export default Portafolio
