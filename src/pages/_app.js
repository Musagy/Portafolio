import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../context/themeContext'

import favicon from 'public/favicon.ico'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Head>
      <link rel="shortcut icon" href={favicon.src}/>
    </Head>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
}

export default MyApp
