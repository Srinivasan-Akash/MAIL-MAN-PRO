import React from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <Image className={styles.logo} src={"/logo.svg"} width={200} height={100} alt={"LOGO"} />
            </div>

            <div className={styles.navitems}>
                <Link href={"#"}>HOME</Link>
                <Link href={"#"}>FEATURES</Link>
                <Link href={"#"}>PRICING</Link>
                <Link href={"#"}>ABOUT ME</Link>
            </div>

            <div>
                <button>GET STARTED
                    <div className={styles.offset}>

                    </div>
                </button>

            </div>
            <Image className={styles.navbarBg} src={"/navbar.png"} width={1500} height={130} alt='navbar' />
        </div>
    )
}
