const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="pb-8 pl-4 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full flex flex-col-2 gap-8 px-4">
          <div className="text-2xl font-bold text-center">
            <p>Hi. I'm Durmus, nice to meet you.</p>
          </div>
          <div className="w-full">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus voluptatem veritatis animi aliquid quisquam dolor
              ducimus? Inventore debitis suscipit, in sequi, atque voluptates
              eum non corrupti, iure omnis veniam tempore. Autem, sint? Laborum,
              non! Vel, aperiam voluptate vero ad debitis ipsam odit
              perspiciatis illo sunt accusantium. Accusantium eaque, assumenda
              maxime id natus eveniet ipsa, pariatur tempore officiis magni
              porro exercitationem!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
