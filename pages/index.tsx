import Head from 'next/head'
import { NextPage } from 'next'
import Portfolio from '../components/Portfolio'

const PorfolioPage: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Nikhil Malik</title>
        <meta name="description" content="Nikhil Malik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto">
        <Portfolio/>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}

export default PorfolioPage;
