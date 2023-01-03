import { useState } from "react";
import { Project } from "../Project";
import wjproject from "../../assets/img/wj.png"
import shoppingproject from "../../assets/img/s.png"
import ksproject from "../../assets/img/ks.png"

import { ContainerProjects, Title, List, Li } from "./styles.js"

export const Projects = () => {
  const [ projects, setProjects ] = useState([
    {
      title: "E-commerce",
      img: shoppingproject,
      link: "https://ecommerce-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/ecommerce-barbaracintr"
    },
    {
      title: "Watermelon Juice",
      img: wjproject,
      link: "https://ubistart-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/watermelonjuice"
    },
    {
      title: "Kenzie Shop",
      img: ksproject,
      link: "https://react-entrega-s3-kenzishop-com-context-api-barbaracintr.vercel.app",
      gh: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-barbaracintr"
    },
  ]);

  return (
    <>
      <ContainerProjects>
        <Title id="h2">Meus Projetos</Title>
        <List>
          {projects.map((project, index) => (
            <Li key={index}>
              <Project project={project} />
            </Li>
          ))}
        </List>
      </ContainerProjects>
    </>
  );
};
