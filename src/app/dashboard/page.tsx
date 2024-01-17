import React from 'react'
import styles from "./page.module.scss"
import Image from 'next/image'
import Welcome from '@/components/dashboard components/Welcome/Welcome'

export default function dashboard() {
  return (
    <div className={styles.parent}>
      <Welcome></Welcome>
    </div>
  )
}
