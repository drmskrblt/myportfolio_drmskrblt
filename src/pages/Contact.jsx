const Contact = () => {
  return (
    <section name="contact" className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <div className="text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
            Contact
          </p>
        </div>

        <p className="text-2xl text-white text-center my-8">
          Need any more Information? Send me a message!
        </p>
        <form
          action="https://formspree.io/f/xgejaeqb"
          method="POST"
          className="space-y-2 flex flex-col bg-slate-700 p-4 rounded-xl"
        >
          <label
            htmlFor="email"
            className="mb-2 text-sm font-bold text-white self-center"
          >
            Your email
          </label>
          <input
            type="text"
            id="email"
            className="p-3 rounded-lg"
            placeholder="example@mail.com"
            required
            name="email"
          />

          <label
            htmlFor="subject"
            className="mb-2 text-sm font-bold text-white self-center"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="p-3 rounded-lg"
            placeholder="What is it about?"
            name="subject"
            required
          />

          <label
            htmlFor="message"
            className="mb-2 text-sm font-bold text-white self-center"
          >
            Your message
          </label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            className="p-3 rounded-lg"
            placeholder="Leave me a message"
            name="message"
          ></textarea>

          <button
            type="submit"
            className="bg-white p-1 w-1/5 self-center rounded-xl text-black"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
