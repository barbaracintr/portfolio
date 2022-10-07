import { Contact } from "../Contact";

import "./style.css";

export const Footer = () => {
  return (
    <>
      <footer className="container-footer">
        <Contact />
        <p className="copy">&copy; Copyright - All rights reserved</p>
      </footer>
    </>
  );
};
