import React from "react";
import Header from "./Components/Header";
import HeaderSection from "./Components/HeaderSection";
import ImageTextSection from "./Components/ImageTextSection";
import ServiceSection from "./Components/ServiceSection";
import TeamSection from "./Components/TeamSection";
import WorkItems from "./Components/WorkItems";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeaderSection />
      <ImageTextSection />
      <ServiceSection />
      <TeamSection />
      <WorkItems />
      <Footer />
    </div>
  );
}

export default App;
