import "./style.css";
import GHIcon from "../../assets/img/github.svg";

export const Project = ({ project }) => {
  return (
    <>
      <div className="item-list">
        <span className="item-list-title">{project.title}</span>
        <img className="item-list-img" src={project.img} />
        <div className="item-list-links">
          <a href={project.gh} target="_blank" className="item-list-gh">
            <img src={GHIcon} />
            GitHub Code
          </a>
          <a href={project.link} target="_blank" className="item-list-app">
            Aplicação
          </a>
        </div>
      </div>
    </>
  );
};
