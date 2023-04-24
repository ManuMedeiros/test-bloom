import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #5062F0;
    padding: 10px;

    @media (max-width: 900px) {
        flex-direction: column;
        .favorite {
            display: none;
        }
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #fff;
`;

export const ContentSearch = styled.div`
    width: 35%;
    position: relative;
    img {
        position: absolute;
        top: 10px;
        left: 5px;
    }

    div {
        width: 92%;
        position: absolute;
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 10px;
        top: 40px;
        padding: 20px;
    }
    
    p {
        cursor: pointer;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    background: #FFFFFF;
    border-radius: 16px;
    outline: none;
    border: none;
    width: 100%;
    height: -webkit-fill-available;
    padding: 0 30px;

    @media (max-width: 900px) {
        height: 4vh;
    }
`;