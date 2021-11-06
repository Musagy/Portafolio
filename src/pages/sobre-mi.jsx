import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import Layout from '../components/layout'


const Habilidades = () => {
  return (
    <Layout>
      <h1 className="text-blueGray-700 text-center font-bold text-2xl dark:text-white">
        <AiFillCaretRight className="inline"/> hola, estas son mis habilidades <AiFillCaretLeft className="inline"/></h1>
    </Layout>
  )
}

export default Habilidades
