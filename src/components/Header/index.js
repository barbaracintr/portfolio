import { HeaderContainer, Box, Logo, BoxTitle, Name, Sub } from "./styles.js";

import { Menu } from "../Menu";

import logo from "../../assets/img/code-solid.svg"

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Box>
          <Logo src={logo} alt="Logo" />
          <BoxTitle>
            <Name>Bárbara Cintra</Name>
            <Sub>Dev Web Front End</Sub>
          </BoxTitle>
        </Box>
        <Menu />
      </HeaderContainer>
    </>
  );
};
