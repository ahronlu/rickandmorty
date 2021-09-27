import Head from "next/head";
import Link from "next/link";
import CharacterCard from "../components/CharacterCard";

export default function Home({ page, characters, pages, count }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Head>
        <title>Rick And Morty</title>
      </Head>
      <h1>Rick And Morty</h1>
      <div className="grid">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
      <div className="paging">
        {Number(page) > 1 && (
          <Link href={`/?page=${Number(page) - 1}`}>&#8592; </Link>
        )}

        {Number(page) < pages && (
          <Link href={`/?page=${Number(page) + 1}`}>&#8594; </Link>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { results, info } = await (
    await fetch(
      `https://rickandmortyapi.com/api/character?page=${query?.page || 1}`
    )
  ).json();

  return {
    props: {
      page: query?.page || 1,
      characters: results,
      pages: info.pages,
      count: info.count,
    },
  };
}
