import React from 'react';

import profile from '../../assets/profile.jpeg';
import logo from '../../assets/logo.jpeg';

import {Container,
        Header, 
        HeaderTitle,
        HeaderSubtitle,
        AboutMeContent,
        AboutMeTextContent,
        AboutProfileContent,
        AboutProfileTextContent } from './styles';

const Me : React.FC = () => (
    <Container>
        <Header>
            <HeaderTitle>ISABELLA LO PRESTI HYDALGO</HeaderTitle>
            <HeaderSubtitle>@saude.delas</HeaderSubtitle>
        </Header>

        <AboutMeContent>
            <img src={profile} alt="Isabella Lo Presti Hydalgo" />

            <AboutMeTextContent>
                <h1>SOBRE MIM</h1>

                <h3>
                    Meu nome é Isabella Lo Presti Hydalgo, sou de Sorocaba,
                    mas atualmente fico dividida entre Sorocaba e São Paulo por
                    conta da faculdade. Eu tenho 20 anos e estou no 7º semestre
                    de Medicina na FAM.
                    Criei o @saude.delas com o objetivo de abordar assuntos
                    sobre saúde, principalmente a saúde feminina, que é a área
                    pela qual sou apaixonada. Além de passar informações de
                    qualidade sobre o assunto e dar algumas dicas, também
                    pretendo mostrar um pouco da minha rotina de estudante de
                    medicina.
                </h3>
            </AboutMeTextContent>

        </AboutMeContent>

        <AboutProfileContent>
            <AboutProfileTextContent>
                <h1>SOBRE O PERFIL</h1>

                    <h3>
                        O nome do perfil foi escolhido por mim, optei por um
                        nome prático e fácil de assimilar, acredito que isso ajuda
                        o público a criar uma relação e empatia comigo e com o
                        meu perfil. Além disso, procurei passar pelo nome o foco
                        do conteúdo que será oferecido.
                        <br/>
                        <br/>
                        O logo mudou recentemente mas a ideia continua a
                        mesma, é um logo simples com o nome do perfil e o
                        símbolo da medicina representando o meu curso.
                    </h3>
            </AboutProfileTextContent>

        <img src={logo} alt="@saude.delas" />
        </AboutProfileContent>
    </Container>
);

export default Me;