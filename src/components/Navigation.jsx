import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navgation = () => {

  const [expandBurger,setExpandBurger] = useState(false)


  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1f2833] text-gray-300 shadow-md">
      <div className="w-[50px] text-[#45a29e]">D.K</div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">Home</li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">About</li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">Skills</li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">Projects</li>
        <li className="text-xl font-bold hover:text-[#66fcf1] hover:font-extrabold hover:scale-110 duration-200">Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={()=> setExpandBurger(!expandBurger)} className="md:hidden z-10 font">
        {!expandBurger ? <FaBars className="text-[#45a29e]"/> : <FaTimes className="text-[#45a29e]"/>}
      </div>

      {/* mobile menu */}
      <ul className={!expandBurger ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#1f2833] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">Home</li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">About</li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">Skills</li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">Projects</li>
        <li className="py-6 text-4xl hover:text-[#66fcf1]">Contact</li>
      </ul>
    </nav>
  );
};

export default Navgation;
