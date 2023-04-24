import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";
import Pagination from "../../components/pagination";

export function Books() {
  const { id } = useParams();

  const [resultsBooks, setResultsBooks] = useState<any>();
  const [paginasBooks, setPaginasBooks] = useState<number>(1);
  const [direction, setDirection] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=yggCmGs5YswBJ7RPaiR0GpHAlZKYGHSd`
      )
      .then((res) => {
        setResultsBooks(res?.data?.results);
      });
  }, [id]);

  const objetosPorPaginaBooks = 5;
  const indiceUltimoObjetoBook = paginasBooks * objetosPorPaginaBooks;
  const indicePrimeiroObjetoBook =
    indiceUltimoObjetoBook - objetosPorPaginaBooks;
  const objetosDaPaginaBook = resultsBooks?.books?.slice(
    indicePrimeiroObjetoBook,
    indiceUltimoObjetoBook
  );

  let booksResults = [];

  for (
    let i = 1;
    i <= Math.ceil(resultsBooks?.books?.length / objetosPorPaginaBooks);
    i++
  ) {
    booksResults.push(i);
  }

  return (
    <S.DivGeneral>
      <S.DivTitle>
        <h1>{resultsBooks?.display_name}</h1>
        <S.BoxGroups>
          <div onClick={() => setDirection(true)}>
            <img
              src="./Group-horizontal.svg"
              alt="selecionar conteudo na horizontal"
            />
          </div>
          <div onClick={() => setDirection(false)}>
            <img
              src="./Group-vertical.svg"
              alt="selecionar conteudo na vertical"
            />
          </div>
        </S.BoxGroups>
      </S.DivTitle>
      <>
        <S.SectionBook
          direction={direction ? "column" : "row"}
          marginContent={direction ? "9%" : ""}
          alignContent={direction && "flex-start"}
        >
          {objetosDaPaginaBook?.map((items: any, index: number) => (
            <S.ContentBooks
              key={index}
              direction={direction ? "row" : "column"}
              alignContent={direction ? "flex-start" : "center"}
            >
              <div>
                <img
                  src={items?.book_image}
                  width={125}
                  height={200}
                  alt="capa do livro"
                />
              </div>
              <S.Div alignContent={!direction && "center"}>
                <div style={{ display: "flex" }}>
                  <h2>{items?.title}</h2>
                  <span>{items?.contributor}</span>
                </div>
                <p>{items?.description}</p>

                <p>Rank {items?.rank}</p>

                <p>{items?.publisher}</p>

                <button>Compre por R${items?.price}</button>
              </S.Div>
            </S.ContentBooks>
          ))}
        </S.SectionBook>
        <Pagination totalItems={booksResults} onPageChange={setPaginasBooks} />
      </>
    </S.DivGeneral>
  );
}
