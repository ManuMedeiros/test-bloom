import styled from "styled-components";

interface PropsStyle {
    direction?: string;
    marginContent?: string;
    alignContent?: any;
}

export const DivGeneral = styled.div`
    padding-bottom: 20px;
`;

export const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F2F3F8;
    padding: 8px 0px;

    h1 {
        margin-left: 9%;
    }
`;

export const BoxGroups = styled.div`
    display: flex;
    gap: 5px;
    margin-right: 9%;

    div {
        cursor: pointer;
    }
`;

export const SectionBook = styled.section<PropsStyle>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    margin-left: ${(props) => props.marginContent};
    padding: 20px 0;
    gap: 20px;

    @media (max-width: 900px) {
        flex-wrap: wrap; 
    }
`;

export const ContentBooks = styled.div<PropsStyle>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: ${(props) => props.alignContent};
    margin-bottom: 25px;
    gap: 20px;

    @media (max-width: 900px) {
        width: 45%;
    }
`;

export const Div = styled.div<PropsStyle>`
    display: flex;
    align-items: ${(props) => props.alignContent};
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;

    h2 {
        font-size: 16px;
        color: #0E1337;
    }

    span {
        font-size: 14px;
        color: #454A67;
        margin-left: 5px;
    }

    p {
        font-size: 14px;
        color: #0E1337;
    }

    button {
        background: #5062F0;
        border-radius: 24px;
        color: #fff;
        padding: 8px 12px;
        text-align: center;
        border: none;
        width: 150px;
    }

    @media (max-width: 900px) {
        div {
            display: block !important;
        }
    }
`;

