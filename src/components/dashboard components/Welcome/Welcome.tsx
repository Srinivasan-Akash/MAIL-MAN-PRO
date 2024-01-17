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
        <img className={styles.offset} src="https://media.discordapp.net/attachments/1144663357845147790/1197188250880704612/Rectangle_372.png?ex=65ba5b71&is=65a7e671&hm=771a313ca47cb41b7d88f9390fe4b25794083a1632469268cf3f2953e4ff0947&=&format=webp&quality=lossless&width=1257&height=544" />
        <img className={styles.screen} src="https://media.discordapp.net/attachments/1144663357845147790/1197191591757107311/Group_86.png?ex=65ba5e8e&is=65a7e98e&hm=a0f1a51bd2b29321a4f717bbae6645c4135d42a2f10b1556878ddc131740ddbb&=&format=webp&quality=lossless&width=1320&height=544" />
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
