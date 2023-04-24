import styled from "styled-components";

export const contentPagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 0 auto;

    @media (max-width: 900px) {
       flex-wrap: wrap;
    }
`;

export const ButtonNumeric = styled.button`
    background: #FFFFFF;
    border: 1px solid #1F2445;
    border-radius: 12px;
    padding: 8px 12px;
    cursor: pointer;
`;