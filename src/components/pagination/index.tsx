import * as S from "./styles";

interface Props {
  totalItems: any;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({ totalItems, onPageChange }: Props) => {
  return (
    <S.contentPagination>
      {totalItems.map((numeroPagina: any) => (
        <S.ButtonNumeric
          key={numeroPagina}
          onClick={() => onPageChange(numeroPagina)}
        >
          {numeroPagina}
        </S.ButtonNumeric>
      ))}
    </S.contentPagination>
  );
};

export default Pagination;
