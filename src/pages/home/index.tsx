import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";
import Pagination from "../../components/pagination";

export function Home() {
  const natigate = useNavigate();
  const [books, setBooks] = useState<any>();
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [direction, setDirection] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=yggCmGs5YswBJ7RPaiR0GpHAlZKYGHSd"
      )
      .then((res) => {
        setBooks(res?.data.results);
      });
  }, []);

  const SearchBooks = (book: any) => {
    natigate(`books/${book}`);
  };

  const objetosPorPagina = 5;

  const indiceUltimoObjeto = paginaAtual * objetosPorPagina;
  const indicePrimeiroObjeto = indiceUltimoObjeto - objetosPorPagina;
  const objetosDaPagina = books?.slice(
    indicePrimeiroObjeto,
    indiceUltimoObjeto
  );

  let paginas = [];
  for (let i = 1; i <= Math.ceil(books?.length / objetosPorPagina); i++) {
    paginas.push(i);
  }

  return (
    <S.DivGeneral>
      <S.DivTitle>
        <h1>Generos</h1>
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
              alt="selecionar conteudo na horizontal"
            />
          </div>
        </S.BoxGroups>
      </S.DivTitle>
      <>
        <S.SectionBook
          direction={direction ? "column" : "row"}
          alignMobile={!direction && "center"}
        >
          {objetosDaPagina?.map((items: any, index: number) => (
            <S.ContentBooks
              key={index}
              direction={direction ? "row" : "column"}
              widthMobile={!direction && "42%"}
            >
              <S.Div>
                <h2 onClick={() => SearchBooks(items?.list_name_encoded)}>
                  {items?.display_name}
                </h2>
              </S.Div>
              <S.Div>
                <p>ultima publicação: {items.newest_published_date}</p>
              </S.Div>
              <S.Div>
                <p>postagem mais antiga: {items.oldest_published_date}</p>
              </S.Div>
            </S.ContentBooks>
          ))}
        </S.SectionBook>
        <Pagination totalItems={paginas} onPageChange={setPaginaAtual} />
      </>
    </S.DivGeneral>
  );
}
