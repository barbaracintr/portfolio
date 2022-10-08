import MenuIcon from "../../assets/img/menu-icon.svg";

import { ContainerMenu, Summary, Item, Link } from "./styles.js";

export const Menu = () => {
  return (
    <ContainerMenu>
      <Summary>
        Menu <img src={MenuIcon} alt="Ícone de Menu" className="menu-icon" />
      </Summary>
      <ul>
        <Item>
          <Link href="#" target="_self">Sobre mim</Link>
        </Item>
        <Item>
          <Link href="#h2">Projetos</Link>
        </Item>
        <Item>
          <Link href="#h4">Contato</Link>
        </Item>
      </ul>
    </ContainerMenu>
  );
};
