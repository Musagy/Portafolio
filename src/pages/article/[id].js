import { useRouter } from 'next/router'
import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import Layout from '../../components/layout'

const Home = () => {
  const { query } = useRouter();
  const { id } = query
  
  return (
    <Layout>
      <h1 className="text-blueGray-700 text-center font-bold text-2xl dark:text-white">
        <AiFillCaretRight className="inline"/> hola, esto es el articulo { id } <AiFillCaretLeft className="inline"/></h1>
    </Layout>
  )
}

export default Home