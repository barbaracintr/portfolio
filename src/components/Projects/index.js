import { useState } from "react";
import { Project } from "../Project";

import "./style.css";

import Ecommerce from "../../assets/img/ecommerce.png"
import ToDoList from "../../assets/img/todolist.png"

export const Projects = () => {
  const [ projects, setProjects ] = useState([
    {
      title: "E-commerce",
      img: "https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?w=900&t=st=1665101829~exp=1665102429~hmac=47f19069ca1e872bb57ead399567d4da081abd3fe1348836bcb553b3705d9438",
      link: "https://ecommerce-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/ecommerce-barbaracintr"
    },
    {
      title: "To do list",
      img: "https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?w=900&t=st=1665101829~exp=1665102429~hmac=47f19069ca1e872bb57ead399567d4da081abd3fe1348836bcb553b3705d9438",
      link: "https://todo-list-delta-olive.vercel.app/",
      gh: "https://github.com/barbaracintr/todolist-project"
    },
    {
      title: "Kenzie Blog",
      img: "https://img.freepik.com/fotos-gratis/vista-traseira-do-programador-trabalhando-a-noite-toda_1098-18697.jpg?w=900&t=st=1665101829~exp=1665102429~hmac=47f19069ca1e872bb57ead399567d4da081abd3fe1348836bcb553b3705d9438",
      link: ""
    },
  ]);

  return (
    <>
      <div className="container-projects">
        <h2 id="h2">Meus Projetos</h2>
        <ol>
          {projects.map((project, index) => (
            <li key={index}>
              <Project project={project} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
