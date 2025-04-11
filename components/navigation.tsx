import styles from "../app/styles/styles.module.css"
import Link from "next/link";

export default function Navigation(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.lists}>
                <li className={styles.list}>
                    <Link href="/" className={styles.link}>🏡 Home</Link>
                </li>
                <li className={styles.list}>
                    <Link href="/about-us" className={styles.link}>🔎 About</Link>
                </li>
            </ul>
        </nav>
    )
}