import LinkedIn from "../../assets/img/linkedin-in.svg";
import Email from "../../assets/img/envelope-solid.svg";
import Wpp from "../../assets/img/whatsapp.svg";

import { ContainerContact, BoxContact, Img } from "./styles.js";

export const Contact = () => {
  return (
    <>
      <ContainerContact>
        <h4 id="h4">Contatos</h4>
        <BoxContact>
          <a href="https://www.linkedin.com/in/barbaracintra161/" target="_blank" className="link-contact">
            <Img src={LinkedIn} />
          </a>
          <a href="mailto:barbaracintrag@gmail.com" title="" target="_blank" className="link-contact">
            <Img src={Email} />
          </a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5592995104079" target="_blank" className="link-contact">
            <Img src={Wpp} />
          </a>
        </BoxContact>
      </ContainerContact>
    </>
  );
};
