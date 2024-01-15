import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import styles from "./hero.module.scss"
import Image from 'next/image'

export default function Hero() {
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.main}>
                <h1 className={styles.headline}>INBOX OVERLOAD ?? CONQUER CHAOS WITH <span>MAIL MAN PRO</span></h1>
                <p className={styles.tagline}>Your inbox's personal postman. Sorting, filtering, organizing, UNSUBSCRIBING & BLOCKING. Take back control AND work on what matters.</p>
                <Image className={styles.img} alt='Showcase' src={"/showcaseProduct.png"} width={1373} height={641}/>
            </div>
        </div>
    )
}
