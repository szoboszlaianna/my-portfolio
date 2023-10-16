import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hey there, I'm Anna.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a dedicated software engineer with a passion for crafting
            high-quality software that tackles real-world challenges. I bring
            experience in frontend development and a deep commitment to
            mastering the backend. I firmly believe that creating software is a
            journey of continuous learning, development, and practice that is
            essential for delivering top-notch solutions. Welcome to my personal
            website, where I share my coding journey and my dedication to this
            process.
          </p>
          <div className="flex justify-center">
            <a
              href="./cv.pdf"
              target="_blank"
              download
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Download my resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full w-5/6	 "
            alt="portrait"
            src="./portrait.jpg"
          />
        </div>
      </div>
    </section>
  );
}
