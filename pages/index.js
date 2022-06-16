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
        <Header title="Hello there!" />
        <p className="description">
        <span className="styled">UI designer</span> &amp; <code>&lt; developer /&gt;</code>
        </p>

        <p>Hit me up at hello @ matteopirelli . com</p>

      </main>
    </div>
  )
}
