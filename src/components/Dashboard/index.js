import photo from "../../assets/img/photoo.png";
import "./style.css";

export const Dashboard = () => {
  return (
    <>
      <div className="container-dashboard">
        <div className="box-resume">
          <span>Bárbara Cintra</span>
          <h1>Desenvolvedora Web Front End</h1>
          <p>
            Programadora web front-end em transição de carreira. Participei de
            dailys, desenvolvi projetos individuais e em grupos com o uso das
            tecnologias ReactJS, JavaScript, HTML5, CCS3, TypeScript, libs como
            Material UI, styled-components, Redux, ContextAPI, React Router 6,
            cosumo de APIs, GIT/GitHub.
          </p>
          <div className="box-link">
            <a href="#" className="link">
              Projetos
            </a>
            <a href="https://github.com/barbaracintr" target="_blank" className="link">
              GitHub
            </a>
            <a href="https://drive.google.com/file/d/1Nknj0mRRC2yAT33jljmcsS3blJ3P6EtE/view?usp=sharing" target="_blank" className="link">
              Currículo
            </a>
          </div>
        </div>
        <img className="box-img" src={photo} alt="Foto" />
      </div>
    </>
  );
};
