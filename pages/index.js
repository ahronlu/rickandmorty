import Head from "next/head";
import CharacterCard from "../components/CharacterCard";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { results, info } = await (
        await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      ).json();

      setCharacters(results);
      setPages(info.pages);
      setCount(info.count);
    };
    getData();
  }, [page]);

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
      <Stack spacing={2} mt={2}>
        <Pagination
          count={pages}
          page={page}
          onChange={handleChange}
          variant="outlined"
        />
      </Stack>
    </div>
  );
}

// export async function getServerSideProps() {}
