import Header from "../components/Header";
import HomeMainComponnent from "../components/HomeMainComponnent";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <HomeMainComponnent />
    </div>
  );
};

export default HomePage;
