import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";

export function Header() {
  const natigate = useNavigate();
  const [books, setBooks] = useState<any>();
  const [search, setSearch] = useState<string>();

  const searchLowerCase = search?.toLowerCase();
  const filterBooks = books?.filter((item: any) =>
    item?.list_name?.toLowerCase().includes(searchLowerCase)
  );

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=yggCmGs5YswBJ7RPaiR0GpHAlZKYGHSd"
      )
      .then((res) => {
        setBooks(res?.data?.results);
      });
  }, []);

  const SearchBooks = (book: any) => {
    natigate(`books/${book}`);
  };

  return (
    <S.Container>
      <S.Title>Bloom Books</S.Title>
      <S.ContentSearch>
        <img src="./search-glass.svg" alt="" />
        <S.Input
          placeholder="Pesquise aqui..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search ? (
          <div>
            {filterBooks?.map((name: any) => (
              <p onClick={() => SearchBooks(name?.list_name_encoded)}>
                {name?.display_name}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </S.ContentSearch>
      <img className="favorite" src="star-favorite.svg" alt="favoritos" />
    </S.Container>
  );
}
