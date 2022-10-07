import "./style.css";
import MenuIcon from "../../assets/img/menu-icon.svg";

export const Menu = () => {
  return (
    <details className="container-menu">
      <summary>
        Menu <img src={MenuIcon} alt="Ícone de Menu" className="menu-icon" />
      </summary>
      <ul>
        <li>
          <a href="#" target="_self">Sobre mim</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </details>
  );
};
