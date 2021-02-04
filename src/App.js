import React from "react";

// Components
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Contact />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
