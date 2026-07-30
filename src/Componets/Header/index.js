import style from "./Header.module.scss";

import miLogo from "../../assests/images/logo.png";
const Header = ({ name }) => {
  return (
    <>
      <div className={style.headerSection}>
        <h3> THIS IS THE {name[0].name}</h3>
        <img src={miLogo} style={{ height: "70px", width: "200px" }} />
      </div>
    </>
  );
};
export default Header;
