import { BoxTech, NameTech, ImgTech } from "./styles.js";

export const Tech = ({ tech }) => {
  return (
    <>
      <BoxTech>
        <ImgTech src={tech.img} />
        <NameTech>{tech.name}</NameTech>
      </BoxTech>
    </>
  );
};
