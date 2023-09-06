import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiSass } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
} from "react-icons/bi";
import { TbBrandBootstrap } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
            Skills
          </p>
        </div>

        {/* HTML CSS ETC */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3 bg-[#1f2833]">
            <p className="text-2xl p-1 text-[#45a29e]">HTML</p>
            <AiFillHtml5 className="text-4xl text-blue-500"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">CSS</p>
            <DiCss3 className="text-4xl text-orange-300"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">Sass</p>
            <DiSass className="text-4xl text-pink-400"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">Javascript</p>
            <BiLogoJavascript className="text-4xl text-yellow-400"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">ReactJS</p>
            <BiLogoReact className="text-4xl text-blue-700"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">TailwindCSS</p>
            <BiLogoTailwindCss className="text-4xl text-blue-300"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">Bootstrap</p>
            <TbBrandBootstrap className="text-4xl text-purple-500"/>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md p-5 gap-3">
            <p className="text-2xl p-1 mx-2 text-[#45a29e]">GitHub</p>
            <AiFillGithub className="text-4xl text-black"/>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;

