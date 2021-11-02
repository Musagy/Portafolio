import {
  AiFillCaretRight, 
  AiFillCaretLeft, 
} from 'react-icons/ai'
import Layout from '../components/layout'
import Image from 'next/image'

const Home = () => {
  return (
    <Layout>
      <main className="flex flex-col md:flex-row justify-items-center-center justify-self-center md:gap-40 items-center h-full gap-6 mt-11 md:m-0">
        <div className="md:h-72 md:w-72 bg-blueGray-900 rounded-full h-48 w-48">
        </div>
        <div className="text-blueGray-700 dark:text-white">
          hola ¿como estas?
        </div>
      </main>
      <footer className="bg-blueGray-400">
      hola
      </footer>
    </Layout>
  )
}

export default Home