import {Link} from "react-scroll"

const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#1f2833]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c5c6c7] text-center">Hey my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#66fcf1] text-center">
          Durmus Karabulut
        </h2>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#45a29e] text-center">
          I'm a Developer
        </h3>
        <p className="text-[#45a29e] text-center">
          Currently studying at DCI and just finished Front End Developing
        </p>
        <div className="self-center">
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#45a29e] hover:border-[#45a29e]">
          <Link to="projects" smooth={true} duration={500}>
            View Projects
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
