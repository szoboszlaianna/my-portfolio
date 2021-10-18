import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 text-white">
                Emdrupvej 54B <br />
                København NV, 2400, Denmark
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-400 leading-relaxed text-white">szoboszlai.anna0@gmail.com.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4 text-white">PHONE</h2>
              <p className="leading-relaxed text-white">+4591833916</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
