// import placeholderImage from "../images/PLACEHOLDER-IMAGE.png";
import PlaystationProject from "../images/PlaystationProject.png"
import GitHubSearchProject from "../images/GitHubSearchProject.png"
import PortfolioProject from "../images/PortfolioProject.png"
import EnergizeMeProject from "../images/EnergizeMeProject2.png"

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-full bg-[#1f2833] text-[#c5c6c7]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
            Projects
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
          {/* CARDS */}
          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-105 duration-500">
            <img
              className="rounded-2xl h-[400px]"
              src={PlaystationProject}
              alt="placeholder projects preview"
            />
            <span className="p-2">
              Frontend, HTML/CSS Project
            </span>
            <div className="flex gap-3 p-2">
              <a
                href="https://github.com/drmskrblt/WebDevCrashCourse_Project_drmskrblt"
                className="m-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://drmskrblt.github.io/WebDevCrashCourse_Project_drmskrblt"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-105 duration-500">
            <img
              className="rounded-2xl h-[400px]"
              src={GitHubSearchProject}
              alt="placeholder projects preview"
            />
             <span className="p-2">
              Full-Stack, HTML/CSS Project
            </span>
            <div className="flex gap-3 p-2">
              <a
                href="https://github.com/drmskrblt/github-search_drmskrblt"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://drmskrblt.github.io/github-search_drmskrblt"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-105 duration-500">
            <img
              className="rounded-2xl h-[400px]"
              src={PortfolioProject}
              alt="placeholder projects preview"
            />
            <span className="p-2">
              Frontend, React Project
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/drmskrblt/myportfolio_drmskrblt"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://myportfolio-durmus.netlify.app"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-105 duration-500">
            <img
              className="rounded-2xl h-[400px]"
              src={EnergizeMeProject}
              alt="placeholder projects preview"
            />
            <span className="p-2">
              Full-Stack, React, Tailwind
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Raum7-Final-Project/EnergizeMe"
                className="my-4 text-[#45a29e] p-2 rounded-xl border"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
