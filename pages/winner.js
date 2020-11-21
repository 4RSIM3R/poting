import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Winner.module.css'
import Particles from "react-tsparticles"
import { motion } from 'framer-motion'

const Winner = () => {

    const router = useRouter()
    const { name, image } = router.query

    return (
        <div className={styles.main}>
            <Head>
                <title>Aplikasi Voting (Katanya)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Particles
                id="tsparticles"
                canvasClassName={styles.canvas}
                options={{

                    background: {
                        color: {
                            value: "#fff",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#0779e4",
                        },
                        links: {
                            color: "#0779e4",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={styles.content}>
                <motion.img transition={{ duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={image} alt="" />
                <motion.h1 transition={{ duration: 1 }} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>{name}</motion.h1>
            </div>
        </div>
    )
}

export default Winner