import React from "react";
import { Element } from "react-scroll";
import Carousel from "./components/carousel/index";
import Header from "./components/headerFooter/header";
import Info from "./components/info/index";
import Hightlight from "./components/highlights/index";
import Pricing from "./components/pricing";
import Location from "./components/location/index";
import Footer from "./components/headerFooter/footer";
import "./resources/styles.css";

function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Element name="header">
        <Header />
      </Element>
      <Element name="carousel">
        <Carousel />
      </Element>
      <Element name="info">
        <Info />
      </Element>
      <Element name="highlight">
        <Hightlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
