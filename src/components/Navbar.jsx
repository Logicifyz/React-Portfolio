
import logo from "../assets/CaligraphyLogo2.png";
import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa"; // Corrected import path

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 pointer-events-none select-none" src={logo} alt=""  />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/zhi-yang-wee-5143a7273/"><FaLinkedin /></a>
        <a href="https://github.com/Logicifyz"><FaGithub /></a>
        <a href="https://www.instagram.com/zhvyxng_/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
