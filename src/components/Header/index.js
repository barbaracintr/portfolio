import "./style.css";
import { Menu } from "../Menu";
import logo from "../../assets/img/logo.png"

export const Header = () => {
  return (
    <>
      <div className="container-header">
        <div className="box">
          <img src={logo} alt="Logo" />
          <div className="box-title">
            <span className="name">Bárbara Cintra</span>
            <span className="sub">Dev Web Front End</span>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};
