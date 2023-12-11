import { useState } from "react";
import { Project } from "../Project";
import wjproject from "../../assets/img/wj.png";
import shoppingproject from "../../assets/img/s.png";
import ksproject from "../../assets/img/ks.png";
import mksproject from "../../assets/img/mksproject.png";
import mercadolibre from "../../assets/img/mercadolibre.png";

import { ContainerProjects, Title, List, Li } from "./styles.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "MKS Challenge",
      img: mksproject,
      link: "https://mks-frontend-challenge-f9ujt8rfe-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/mks-frontend-challenge",
    },
    {
      title: "E-commerce",
      img: shoppingproject,
      link: "https://ecommerce-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/ecommerce-barbaracintr",
    },
    {
      title: "Watermelon Juice",
      img: wjproject,
      link: "https://ubistart-barbaracintr.vercel.app/",
      gh: "https://github.com/barbaracintr/watermelonjuice",
    },
    {
      title: "Kenzie Shop",
      img: ksproject,
      link: "https://react-entrega-s3-kenzishop-com-context-api-barbaracintr.vercel.app",
      gh: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-barbaracintr",
    },
    {
      title: "Mercado Libre Clone",
      img: mercadolibre,
      link: "https://ecommerce-mercadolibre.vercel.app/",
      gh: "https://github.com/barbaracintr/ecommerce-mercado-libre/tree/master",
    },
  ]);

  return (
    <>
      <ContainerProjects>
        <Title id="h2">Meus Projetos</Title>
        <List>
          <Swiper
            logo={true}
            spaceBetween={0}
            className="h-[30%]"
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 4500,
            }}
          >
            {projects.map((project, index) => (
              // <Li key={index}>
              <SwiperSlide key={index}>
                <Project project={project} />
              </SwiperSlide>
              // </Li>
            ))}
          </Swiper>
        </List>
      </ContainerProjects>
    </>
  );
};
