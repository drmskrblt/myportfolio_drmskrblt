import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navgation = () => {
  const [expandBurger, setExpandBurger] = useState(false);

  const closeMenu = () => {
    if (expandBurger === true) setExpandBurger(!expandBurger);
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1f2833] text-gray-300 shadow-md">
      <div className="w-[50px] text-[#45a29e]">D.K</div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={() => setExpandBurger(!expandBurger)}
        className="md:hidden z-10 font"
      >
        {!expandBurger ? (
          <FaBars className="text-[#45a29e]" />
        ) : (
          <FaTimes className="text-[#45a29e]" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !expandBurger
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1f2833] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#66fcf1]">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">
          <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navgation;
