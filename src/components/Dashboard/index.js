import photo from "../../assets/img/photo.png";

import { Header } from "../Header";

import { ContainerDashboard, BoxResume, Name, Title, Description, BoxLinks, Link, Photo } from "./styles.js";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerDashboard>
        <BoxResume>
          <Name>Bárbara Cintra</Name>
          <Title>Desenvolvedora Web Front End</Title>
          <Description>
            Desenvolvedora Web Front End em início de carreira.
            Formada em Psicologia pela Universidade Federal do Amazonas (UFAM), no ano de 2018.
            Gosto de estudar sobre as questões cognitivas e comportamentais, além de ser entusiasta
            da programação desde a escola quando me formei Técnica em Mecatrônica.
          </Description>
          <Description>
            Atualmente sou Programadora Front End em uma startup que tem foco no desenvolvimento
            de softwares especializados para empresas do Polo Industrial de Manaus (PIM).
            Juntamente com uma equipe de programadores, realizo manutenções nos projetos com
            React.js e utilizo linhas de comando Linux/Ubuntu com a organização das sprints feitas através do Trello.
          </Description>
          <BoxLinks>
            <Link href="#h2" className="link">
              Projetos
            </Link>
            <Link href="https://github.com/barbaracintr" target="_blank" className="link">
              GitHub
            </Link>
            <Link href="https://drive.google.com/file/d/197PZTx1pubzrtw-97nflFaG596ruW7lm/view?usp=sharing" target="_blank" className="link">
              Currículo
            </Link>
          </BoxLinks>
        </BoxResume>
        <Photo className="box-img" src={photo} alt="Foto" />
      </ContainerDashboard>
    </>
  );
};
