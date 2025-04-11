import styles from "../styles/styles.module.css"
import '../styles/global.css'
import Link from "next/link";

export const metadata = {
  title: "Home",
};

const URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getList() {
  return fetch(URL).then((res) => res.json());
}

export default async function HomePage() {
  const list = await getList();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
        <ul className={styles.lists}>
          {list?.results?.map((result) => (
            <li key={result.list_name} className={styles.list}>
              <Link prefetch href={`/list/${result.list_name_encoded}`} className={styles.link}>
                📚 {result.list_name}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
