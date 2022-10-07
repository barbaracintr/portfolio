import { Tech } from "../Tech";

import "./style.css";

import CSS3 from "../../assets/img/css3.svg";
import ReactJS from "../../assets/img/react.svg";
import JS from "../../assets/img/js.svg";
import HTML5 from "../../assets/img/html5.svg";
import TS from "../../assets/img/typescript.png";


export const Techs = () => {
  const techsList = [
    {
      name: "ReactJS",
      img: ReactJS,
    },
    {
      name: "JavaScript",
      img: JS,
    },
    {
      name: "TypeScript",
      img: TS,
    },
    {
      name: "HTML5",
      img: HTML5,
    },
    {
      name: "CSS3",
      img: CSS3,
    },
  ];

  return (
    <>
        <ul className="container-techs">
          {techsList.map((tech, index) => {
            return (
              <li key={index}>
                <Tech tech={tech} />
              </li>
            );
          })}
        </ul>
    </>
  );
};
