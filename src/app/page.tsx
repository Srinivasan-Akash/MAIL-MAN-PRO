import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.parentContainer}>
      <Navbar></Navbar>
    </main>

  )
}
