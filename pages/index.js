import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Aplikasi Voting (Katanya)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>📢 Pemilihan Osis</h1>
        <div className={styles.vote_wrapper}>
          <div className={styles.vote_content}>
            <h3>{first} ✋</h3>
            <img className={styles.photo} src="https://www.docker.com/sites/default/files/d8/styles/medium/public/bret-fisher-docker_0.jpg?itok=2GyjkqBn" alt="" />
            <button onClick={((e) => setFirst(first + 1))}>Vote 🚀</button>
          </div>
          <div className={styles.vote_content}>
            <h3>{second} ✋</h3>
            <img className={styles.photo} src="https://www.docker.com/sites/default/files/d8/styles/medium/public/bret-fisher-docker_0.jpg?itok=2GyjkqBn" alt="" />
            <button onClick={((e) => setSecond(second + 1))}>Vote ☝</button>
          </div>
          <div className={styles.vote_content}>
            <h3>{third} ✋</h3>
            <img className={styles.photo} src="https://www.docker.com/sites/default/files/d8/styles/medium/public/bret-fisher-docker_0.jpg?itok=2GyjkqBn" alt="" />
            <button onClick={((e) => setThird(third + 1))}>Vote ✊</button>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://github.com/4RSIM3R/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created With 😅 By SUKU
        </a>
      </footer> */}
    </div>
  )
}
