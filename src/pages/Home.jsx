import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import Qualities from "../components/Qualities";
import React from "react";
import Reservation from "../components/Reservation";
import Team from "../components/Team";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
<HeroSection/>
<About/>
<Qualities/>
<Menu/>
<WhoAreWe />

<Footer/>
    </>
  )
}

export default Home