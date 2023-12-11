import photo from "../../assets/img/photo.jpeg";

import { Header } from "../Header";

import {
  ContainerDashboard,
  BoxResume,
  Name,
  Title,
  Description,
  BoxLinks,
  Link,
  Photo,
} from "./styles.js";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerDashboard>
        <BoxResume>
          <Name>Bárbara Cintra</Name>
          <Title>Desenvolvedora Web Front End</Title>
          <Description>
            Desenvolvedora Web Front End em início de carreira. Formada em
            Psicologia pela Universidade Federal do Amazonas (UFAM), no ano de
            2018. Gosto de estudar sobre as questões cognitivas e
            comportamentais, além de ser entusiasta da programação desde a
            escola quando me formei Técnica em Mecatrônica.
          </Description>
          <Description>
            Em meu último cargo trabalhei como Programadora Front End Jr em uma
            startup que tem foco no desenvolvimento de softwares especializados
            para empresas do Polo Industrial de Manaus (PIM). Juntamente com uma
            equipe de programadores, realizava manutenções nos projetos com
            ReactJS e utilizava linhas de comando Linux/Ubuntu com a organização
            das sprints feitas através do Trello.
          </Description>
          <BoxLinks>
            <Link href="#h2" className="link">
              Projetos
            </Link>
            <Link
              href="https://github.com/barbaracintr?tab=repositories"
              target="_blank"
              className="link"
            >
              GitHub
            </Link>
            <Link
              href="https://drive.google.com/file/d/1iy87kXb7nISlNWgQPxwfAhg8cS6W0Z2-/view?usp=sharing"
              target="_blank"
              className="link"
            >
              Currículo
            </Link>
          </BoxLinks>
        </BoxResume>
        <Photo className="box-img" src={photo} alt="Foto da Desenvolvedora" />
      </ContainerDashboard>
    </>
  );
};
