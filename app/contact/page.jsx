import React from "react";

const page = () => {
  return (
    <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-3xl">Get in Touch</h4>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Feel free to contact me
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="sm:text-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            className="sm:text-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2  rounded-full mx-auto text-gray-700 border-[0.5px] border-gray-400 hover:bg-violet-100 active:bg-violet-100 duration-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
