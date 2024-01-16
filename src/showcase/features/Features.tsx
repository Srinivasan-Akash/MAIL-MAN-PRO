import React from 'react'
import styles from "./features.module.scss"
import Image from 'next/image'

export default function Features() {
    return (
        <div className={styles.parent}>
            <div className={styles.left}>
                <h1>LET MAILMAN MAKE YOUR EMAIL PRODUCTIVE</h1>
                <div className={styles.points}>
                    <div className={styles.point}>
                        <div className={styles.index}>1.</div>
                        <p>Easily Unsubscribe Newsletters</p>
                    </div>

                    <div className={styles.point}>
                        <div className={styles.index}>2.</div>
                        <p>Can’t FInd Important Mails ??</p>
                    </div>

                    <div className={styles.point}>
                        <div className={styles.index}>3.</div>
                        <p>Setup autoclean rules for mails</p>
                    </div>

                    <div className={styles.point}>
                        <div className={styles.index}>4.</div>
                        <p>Organized Email Via Categories</p>
                    </div>

                    <div className={styles.point}>
                        <div className={styles.index}>5.</div>
                        <p>Create EMail Groups or block Mail ID</p>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <Image src={"/login.png"} alt='login' width={438} height={441} />
                <div className={styles.screen}>
                    <h1>LOGIN OR SIGNUP</h1>
                    <div className={styles.pseudoInputs}>
                        <input type='text' placeholder='Enter Your Email ID' />
                        <img src='https://media.discordapp.net/attachments/1144663357845147790/1196711167083687956/Rectangle_386.png?ex=65b89f20&is=65a62a20&hm=458d02bf9eae8733791271377d9794dfc87013481378167c6aea035c858bb8f6&=&format=webp&quality=lossless&width=898&height=132'></img>
                    </div>
                    <div className={styles.pseudoInputs}>
                        <input type='text' className={styles.input2} placeholder='Enter Your Credentials' />
                        <img src='https://media.discordapp.net/attachments/1144663357845147790/1196711167566041108/Rectangle_387.png?ex=65b89f20&is=65a62a20&hm=05b8eab022f94617352d330ce25fd86c1a975e704c17e27860fca725f650f608&=&format=webp&quality=lossless&width=898&height=132'></img>
                    </div>
                    
                    <div className={styles.pseudoInputs}>
                        <img className={styles.or} src='https://media.discordapp.net/attachments/1144663357845147790/1196714102874189834/Group_84.png?ex=65b8a1db&is=65a62cdb&hm=25ae33781a278196c0c1c2c828ddc4ab458149af499615dd0dbcc33fcdcaa329&=&format=webp&quality=lossless&width=513&height=97'></img>
                    </div>

                    <div className={styles.pseudoBtn}>
                        <button>Sign In Via Google</button>
                        <img src='https://media.discordapp.net/attachments/1144663357845147790/1196711167083687956/Rectangle_386.png?ex=65b89f20&is=65a62a20&hm=458d02bf9eae8733791271377d9794dfc87013481378167c6aea035c858bb8f6&=&format=webp&quality=lossless&width=898&height=132'></img>
                    </div>
                    <div className={styles.pseudoBtn}>

                        <button className={styles.button2}>Sign In Via Outlook</button>
                        <img src='https://media.discordapp.net/attachments/1144663357845147790/1196711167566041108/Rectangle_387.png?ex=65b89f20&is=65a62a20&hm=05b8eab022f94617352d330ce25fd86c1a975e704c17e27860fca725f650f608&=&format=webp&quality=lossless&width=898&height=132'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
