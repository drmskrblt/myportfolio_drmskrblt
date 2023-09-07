import placeholderImage from "../images/PLACEHOLDER-IMAGE.png";

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
          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-110 duration-500">
            <img
              className="object-contain rounded-2xl"
              src={placeholderImage}
              alt="placeholder projects preview"
            />
            <div className="flex gap-3">
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                GitHub
              </a>
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-110 duration-500">
            <img
              className="object-contain rounded-2xl"
              src={placeholderImage}
              alt="placeholder projects preview"
            />
            <div className="flex gap-3">
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                GitHub
              </a>
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-110 duration-500">
            <img
              className="object-contain rounded-2xl"
              src={placeholderImage}
              alt="placeholder projects preview"
            />
            <div className="flex gap-3">
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                GitHub
              </a>
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                Demo
              </a>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] bg-slate-700 group rounded-2xl flex flex-col justify-start items-center p-1 hover:scale-110 duration-500">
            <img
              className="object-contain rounded-2xl"
              src={placeholderImage}
              alt="placeholder projects preview"
            />
            <div className="flex gap-3">
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                GitHub
              </a>
              <a
                href="#projects"
                className="hidden group-hover:block my-4 text-[#45a29e] p-2 rounded-xl border"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
