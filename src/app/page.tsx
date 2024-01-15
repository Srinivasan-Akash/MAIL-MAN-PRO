import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/showcase/hero/Hero'

export default function Home() {
  return (
    <main className={styles.parentContainer}>
      <Hero></Hero>
    </main>

  )
}
