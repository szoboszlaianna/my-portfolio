import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-900 bg-gray-100 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
