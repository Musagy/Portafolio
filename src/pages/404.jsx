import Layout from '../components/layout'
import Link from 'next/link'
const Page404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-3 md:mb-12">
        <h1 className="
          text-teal-500 font-bold md:text-7xl text-center
          sm:text-6xl  
          text-5xl
        ">
          ¡Error 404!
        </h1>
        <p className="
          text-blueGray-700 dark:text-white font-normal md:text-4xl text-center
          sm:text-3xl  
          text-2xl
        ">
          Amigo, esta direccion url no existe.
        </p>
        <button className="
        px-4 py-3 rounded-xl text-2xl mx-auto font-semibold bg-blueGray-700
        mt-3
        transition-all

        hover:bg-teal-500 dark:hover:bg-teal-500 hover:scale-125
        ">
          <Link href="/">
            Ir a inicio
          </Link>
        </button>
      </div>
    </Layout>
  )
}

export default Page404
