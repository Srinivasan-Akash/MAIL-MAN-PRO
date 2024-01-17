import React from 'react'
import Navbar from '../../navbar/Navbar'
import styles from "./welcome.module.scss"
import Image from 'next/image'
import { services } from '@/static/services'

export default function Welcome() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.main}>
        <div className={styles.gridContainer}>
          {
            services.map(() => {
              return (
                <div className={styles.card}>
                  <div className={styles.reviewContainer}>
                    <div>
                      <div className={styles.profilePic}>

                      </div>
                      <div>
                        <h2>Bishal Nandi</h2>
                        <p>FOUNDER OF GROWITRAPID</p>
                      </div>
                    </div>

                    <div>
                      <p>I liked Clean Email best. Before, I had 17,677 unread emails. Now, it’s a fraction of that.</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
