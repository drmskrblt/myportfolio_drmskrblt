import placeholder from "../images/PLACEHOLDER-IMAGE.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="md:text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
            Projects
          </p>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="shadow-lg shadow-[#040c16] group rounded-md flex flex-col justify-center items-center mx-auto p-4">
            <p className="text-2xl">CSS Project</p>
            <img
              className="h-auto max-w-full object-contain rounded-2xl"
              src={placeholder}
              alt="placeholder projects preview"
            />
            <a href="#" className="hidden group hover:block">View</a>
          </div>

          <div className="shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-4">
            <p>CSS Project</p>
            <img
              className="h-auto max-w-full object-contain rounded-2xl"
              src={placeholder}
              alt="placeholder projects preview"
            />
            <button>
              <a href="#">View</a>
            </button>
          </div>

          <div className="shadow-lg shadow-[#040c16] rounded-md flex flex-col justify-center items-center mx-auto p-4">
            <p>CSS Project</p>
            <img
              className="h-auto max-w-full object-contain rounded-2xl"
              src={placeholder}
              alt="placeholder projects preview"
            />
            <button>
              <a href="#">View</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
