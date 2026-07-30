import style from "./Header.module.scss";
import { useState } from "react";
import miLogo from "../../assests/images/logo.png";

const Header = () => {
  const links = [
    "Home",
    "About Us",
    "Courses",
    "Gallery",
    "Placement",
    "Student Feedback",
    "Blog",
    "Contact Us",
  ];

  const [active, setActive] = useState("Home");

  return (
    <header className={style.headerSection}>
      <div className={style.logoSection}>
        <img src={miLogo} alt="logo" />
      </div>

      <nav className={style.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <button
                className={active === link ? style.active : ""}
                onClick={() => setActive(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
