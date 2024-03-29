import React from "react";
import logoceleste from "../../assets/logo-celeste.svg";
import logovioleta from "../../assets/logo-violeta.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { useUserOptions } from "../../context/UserOptionsContext";

export default function Footer() {
  const { theme } = useUserOptions();
  return (
    <footer className={theme}>
      <div className="container d-flex justify-content-between">
        <div className="texto-footer">
          <img
            src={theme == "light" ? logoceleste : logovioleta}
            className="logo"
            alt="project tracker logo"
          />
        </div>

        <div className="section-icons">
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
