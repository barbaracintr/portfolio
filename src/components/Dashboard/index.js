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
            Programadora web front-end em transição de carreira. Participei de
            dailys, desenvolvi projetos individuais e em grupos com o uso das
            tecnologias ReactJS, JavaScript, HTML5, CCS3, TypeScript, libs como
            Material UI, styled-components, Redux, ContextAPI, React Router 6,
            cosumo de APIs, GIT/GitHub.
          </Description>
          <BoxLinks>
            <Link href="#h2" className="link">
              Projetos
            </Link>
            <Link href="https://github.com/barbaracintr" target="_blank" className="link">
              GitHub
            </Link>
            <Link href="https://drive.google.com/file/d/1Nknj0mRRC2yAT33jljmcsS3blJ3P6EtE/view?usp=sharing" target="_blank" className="link">
              Currículo
            </Link>
          </BoxLinks>
        </BoxResume>
        <Photo className="box-img" src={photo} alt="Foto" />
      </ContainerDashboard>
    </>
  );
};
