// Naming the file jsx cause i'm gonna use emit for shortcuts. If it's an js extention, using emit is gonna be hard
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
