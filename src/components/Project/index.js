import { ItemList, Title, Img, ImgGh, Links, Link } from "./styles.js";

import GHIcon from "../../assets/img/github.svg";

export const Project = ({ project }) => {
  return (
    <>
      <ItemList>
        <Title>{project.title}</Title>
        <Img src={project.img} />
        <Links>
          <Link href={project.gh} target="_blank">
            <ImgGh src={GHIcon} />
            GitHub Code
          </Link>
          <Link href={project.link} target="_blank">
            Aplicação
          </Link>
        </Links>
      </ItemList>
    </>
  );
};
