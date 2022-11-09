// import { Montserrat } from '@next/font/google'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <main className={montserrat.className}>
    <Component {...pageProps} />
    // </main>
  )
}

export default MyApp
