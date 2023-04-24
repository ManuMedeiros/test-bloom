import styled from "styled-components";

interface PropsStyle {
    direction: string;
    alignMobile?: any;
    widthMobile?: any;
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
    gap: 54px;
    margin-left: 9%;
    margin-top: 20px;
    margin-bottom: 25px;

    @media (max-width: 900px) {
        flex-direction: ${(props) => props.direction};
        flex-wrap: wrap;
        align-items: ${(props) => props.alignMobile};
        margin: 0 10px;
    }
`;

export const ContentBooks = styled.div<PropsStyle>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: space-between;
    margin: 0;

    @media (max-width: 900px) {
        width: ${(props) => props.widthMobile};
        flex-direction: column;
    }
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: 10px 0;

    h2 {
        cursor: pointer;
        font-size: 20px;
        text-decoration-line: underline;
        color: #5062F0;
    }

    p {
        font-size: 12px;
        color: #454A67;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

