import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#1f2833]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#c5c6c7]">Hey my name is</p>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#66fcf1]">Durmus Karabulut</h2>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#45a29e]">I'm a Developer</h3>
        <p className="text-[#45a29e]">Currently studying at DCI and just finished Front End Developing</p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#45a29e] hover:border-[#45a29e]">
            View Projects <HiArrowNarrowRight className="ml-2"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
