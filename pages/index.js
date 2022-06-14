import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matteo Pirelli | UI Design and development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Matteo Pirelli" />
        <p className="description">
          UI <span className="styled">design</span> and <code>&lt; development /&gt;</code>
        </p>

        <p>Hit me up at hello @ matteopirelli . com</p>

      </main>
    </div>
  )
}
