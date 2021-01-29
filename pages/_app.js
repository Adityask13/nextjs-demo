import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>Create Next App-demo</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <h1> Demo </h1>

      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/listing">
          <a>Listing</a>
        </Link>
        <Link href="/static/about">
        <a>About</a> 
        </Link>
      </p>
    </header>
    <Component {...pageProps} />    
    <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </>
}

export default MyApp
