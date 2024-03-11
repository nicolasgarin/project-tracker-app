import React from "react";
import logo from '../../assets/logo-celeste-circulo.svg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { useUserOptions } from "../../context/UserOptionsContext";

export default function Footer() {
  const { theme, toggleTheme } = useUserOptions;
  return (
    <footer className={theme}>
      <div className="container d-flex justify-content-between">
        <div className="texto-footer">                <img src={logo} className='logo' alt='project tracker logo' />
</div>

        <div class="section-icons">
          <a href="https://github.com/nicolasgarin">
            <FaGithub className="ficon" />
          </a>
          <a href="https://www.linkedin.com/in/nicol%C3%A1s-gar%C3%ADn-a90b55202/">
            <FaLinkedin className="ficon" />
          </a>
          <a href="#">
            <MdOutlineContactPage className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
