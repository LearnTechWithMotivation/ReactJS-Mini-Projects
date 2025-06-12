import React from "react";
import Intro from "./Intro";
import ProjectsList from "./ProjectsList";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <main
      style={{
        backgroundImage: "url('/bg-ice.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-[100vh] flex-center flex-col"
    >
      <NavBar />
      <Intro />
      <ProjectsList />
      <Footer />
      <Outlet />
    </main>
  );
};

export default Home;
