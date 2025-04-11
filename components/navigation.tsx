import styles from "../app/styles/styles.module.css"
import Link from "next/link";

export default function Navigation(){
    return(
        <nav className={styles.nav}>
                <div className={styles.list}>
                    <Link href="/" className={styles.link}>🏡 Home</Link>
                </div>
                <div className={styles.list}>
                    <Link href="/about" className={styles.link}>🔎 About</Link>
                </div>
        </nav>
    )
}