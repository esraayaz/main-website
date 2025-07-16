import React from "react";

const page = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="flex w-full flex-col items-start gap-10">
        <div>
          <h1 className="mb-5 text-3xl">Me</h1>
          <p className="text-balance leading-8 text-md mb-5 w-10/12">
            I completed{" "}
            <span className="italic font-semibold">
              Meta Front-End Developer
            </span>{" "}
            course and during this process, I also polished my knowledge with
            other platforms such as Scrimba, FreeCodeCamp, Codecademy, and
            Udemy.
          </p>
          <p className="text-md mx-auto ">
            <span className="italic font-semibold">
              I am looking a position
            </span>{" "}
            actively to develop my skills and gaining experience ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
