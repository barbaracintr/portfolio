import LinkedIn from "../../assets/img/linkedin-in.svg";
import Email from "../../assets/img/envelope-solid.svg";
import Wpp from "../../assets/img/whatsapp.svg";

import "./style.css";

export const Contact = () => {
  return (
    <>
      <div className="container-contact">
        <h4>Contatos</h4>
        <div className="box-contact">
          <a href="https://www.linkedin.com/in/barbaracintra161/" target="_blank" className="link-contact">
            <img src={LinkedIn} />
          </a>
          <a href="mailto:barbaracintrag@gmail.com" title="" target="_blank" className="link-contact">
            <img src={Email} />
          </a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5592995104079" target="_blank" className="link-contact">
            <img src={Wpp} />
          </a>
        </div>
      </div>
    </>
  );
};
