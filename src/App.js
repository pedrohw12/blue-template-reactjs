import React from "react";

// Components
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <GlobalStyle />
    </>
  );
}

export default App;
