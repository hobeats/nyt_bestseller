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
    <>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      <div>{JSON.stringify(list)}</div>
    </>
  );
}
