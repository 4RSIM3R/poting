import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const useKey = (key, callback) => {

  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  const handler = (event) => {
    if (event.key === key) {
      callbackRef.current(event)
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [key])

}

export default function Home() {

  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  const router = useRouter()

  useKey("1", () => {
    setFirst(first + 1)
  })

  useKey("2", () => {
    setSecond(second + 1)
  })

  useKey("3", () => {
    setThird(third + 1)
  })

  useKey("4", () => {
    setFirst(first - 1)
  })

  useKey("5", () => {
    setSecond(second - 1)
  })

  useKey("6", () => {
    setThird(third - 1)
  })

  useKey("Enter", () => {
    if (first > second && first > third) {
      router.push({
        pathname: '/winner',
        query: { name: 'Muhammad Faza Alfariezhi', image: 'https://poting.s3-ap-southeast-1.amazonaws.com/126095898_1007499322988949_4412459518518527904_n.jpg' },
      })
    } else if (second > first && second > third) {
      router.push({
        pathname: '/winner',
        query: { name: 'Muhammad Iqbal Al-irsyad', image: 'https://poting.s3-ap-southeast-1.amazonaws.com/126003606_138523027609447_7998817166123517722_n.jpg' },
      })
    } else {
      // 3 yang menang
      router.push({
        pathname: '/winner',
        query: { name: 'Wifqo Arova Syams', image: 'https://poting.s3-ap-southeast-1.amazonaws.com/126159555_202990977869852_8797938190089351812_n.jpg' },
      })
    }
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Aplikasi Voting (Katanya)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <h1>📢 Pemilihan Osis</h1>
        <div className={styles.vote_wrapper} >
          <div className={styles.vote_content}>
            <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>{first} ✋</motion.h3>
            <motion.img transition={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.photo} src="https://poting.s3-ap-southeast-1.amazonaws.com/126095898_1007499322988949_4412459518518527904_n.jpg" alt="" />
            <button onClick={((e) => setFirst(first + 1))}>Vote 🚀</button>
          </div>
          <div className={styles.vote_content}>
            <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>{second} ✋</motion.h3>
            <motion.img transition={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.photo} src="https://poting.s3-ap-southeast-1.amazonaws.com/126003606_138523027609447_7998817166123517722_n.jpg" alt="" />
            <button onClick={((e) => setSecond(second + 1))}>Vote ☝</button>
          </div>
          <div className={styles.vote_content}>
            <motion.h3 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>{third} ✋</motion.h3>
            <motion.img transition={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.photo} src="https://poting.s3-ap-southeast-1.amazonaws.com/126159555_202990977869852_8797938190089351812_n.jpg" alt="" />
            <button onClick={((e) => setThird(third + 1))}>Vote ✊</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/4RSIM3R/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created With 😅 By SUKU
        </a>
      </footer>
    </div>
  )
}
