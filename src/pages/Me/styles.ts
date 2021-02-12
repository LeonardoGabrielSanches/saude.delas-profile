import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
    padding: 60px 0;
    background: #DD7A98;
    text-align:center;
`;

export const HeaderTitle = styled.h1`
    font-size:54px;
`;

export const HeaderSubtitle = styled.h2`
    margin-top:24px;
`;

export const AboutMeContent = styled.div`
    padding: 50px 180px;
    display:flex;

    > img {
        margin-top:130px;
        height: 300px;
        width: 1200px;
        border-radius:50%;
    }
`;

export const AboutMeTextContent = styled.div`
    margin-top:150px;
    margin-left: 180px;

    > h1 {
        color: #DD7A98;
    }

    > h3 {
        margin-top:20px;
        color: #000;
    }
`;

export const AboutProfileContent = styled.div`
    padding: 80px 120px;
    display:flex;

    > img {
        height: 500px;
        width: 500px;
        border-radius:50%;
        margin-left:120px;
    }
`;

export const AboutProfileTextContent = styled.div`
    > h1 {
        color: #DD7A98;
        margin-top:140px;
    }

    > h3 {
        margin-top:20px;
        color: #000;
    }
`;
