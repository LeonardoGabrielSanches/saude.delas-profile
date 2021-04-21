import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 2rem;
`;

export const Header = styled.div`
    padding: 2rem;
    background: #DD7A98;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    text-align: center;
`;

export const HeaderTitle = styled.h1`
    font-size:3.375rem;
`;

export const HeaderSubtitle = styled.h2`
    margin-top:1.5rem;
`;

export const AboutMeContent = styled.div`
    padding-right:1rem;
    padding-left:1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1120px;
    margin: 0 auto;
   

    img {
        height: 18.75rem;
        margin-top: 5rem;
        width: 18.75rem;
        border-radius:50%;
    }

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: center;

        img {
            height: 12rem;
            width: 12rem;
        }
    }
`;

export const AboutMeTextContent = styled.div`
    margin-top:2rem;
    margin-left: 2rem;

    > h1 {
        color: #DD7A98;
    }

    > h3 {
        margin-top:20px;
        color: #000;
    }

    @media(max-width: 720px) {
        text-align: center;
        margin-left: 0;
    }
`;

export const AboutProfileContent = styled.div`
    max-width: 1120px;
    margin: 5rem auto 0;
    display:flex;
    align-items: center;

    padding-right:1rem;
    padding-left:1rem;

    img {
        height: 18.75rem;
        width: 18.75rem;
        border-radius:50%;
        margin-left: 2rem;
    }

    @media(max-width: 720px) {
        flex-direction: column-reverse;

        img {
            margin-bottom: 2rem;
            height: 12rem;
            width: 12rem;
        }
    }
`;

export const AboutProfileTextContent = styled.div`
    > h1 {
        color: #DD7A98;
    }

    > h3 {
        margin-top:20px;
        color: #000;
    }

    @media(max-width: 720px) {
        text-align: center;
    }
`;
