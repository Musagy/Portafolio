import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../context/themeContext'
import { AuthProvider } from '../context/authContext'

import favicon from 'public/favicon.ico'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Head>
          <link rel="shortcut icon" href={favicon.src}/>
        </Head>
        <Component {...pageProps}/>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
