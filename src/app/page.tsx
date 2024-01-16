import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/showcase/hero/Hero'
import Testimonials from '@/showcase/testimonials/Testimonials'
import Features from '@/showcase/features/Features'

export default function Home() {
  return (
    <main className={styles.parentContainer}>
      <div className={styles.hero}>
        <Hero></Hero>
      </div>

      <div className={styles.testimonials}>
        <Testimonials></Testimonials>
      </div>

      <div className={styles.features}>
        <Features></Features>
      </div>
    
    </main>

  )
}
