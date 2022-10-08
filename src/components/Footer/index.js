import { Contact } from "../Contact";

import { ContainerFooter, Copy } from "./styles.js";

export const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Contact />
        <Copy>&copy; Copyright - All rights reserved</Copy>
      </ContainerFooter>
    </>
  );
};
