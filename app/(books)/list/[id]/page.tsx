import Link from "next/link";
import { Metadata } from "next";
import styles from "/app/styles/list.module.css";
import "/app/styles/global.css";

// Next.js에서 제공하는 PageProps를 사용하여 타입을 정의
type PageProps = {
  params: { id: string }; // params를 구조 분해
};

async function getDetail(id: string) {
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  );
  return res.json();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const detail = await getDetail(params.id);

  return {
    title: `${detail?.results?.list_name}`,
  };
}
export default async function Detail({ params }: PageProps) {
  const detail = await getDetail(params.id);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{detail?.results?.list_name} Books</h1>
      <ul className={styles.lists}>
        {detail?.results?.books?.map((book) => (
          <li key={book.primary_isbn13} className={styles.list}>
            <div className={styles.bookContainer}>
              <img
                src={
                  book.book_image
                    ? book.book_image
                    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsubscription.tawseel.com%2Fimages%2Fpublications%2FNOT_AVAILABLE.png&f=1&nofb=1&ipt=161aefe657458ce8bc1d0f9fb9d00b132adcfc002a8b19dd4b29451e09f39cc1"
                }
                className={styles.img}
              />
              <div className={styles.info}>
                <div className={styles.booktitle}>{book.title}</div>
                <div>{book.author}</div>
              </div>
              <Link href={book.buy_links[0].url} className={styles.link}>
                BUY NOW
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
