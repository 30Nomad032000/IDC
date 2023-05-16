import React from "react";
import HeroBanner from "./Components/HeroBanner.jsx";
import HeroBannerBottom from "./Components/HeroBannerBottom.jsx";
import HomeDetails from "./Components/HomeDetails.jsx";

function Home() {
  return (
    <>
      <HeroBanner />
      <HeroBannerBottom />
      <HomeDetails />
    </>
  );
}

export default Home;
