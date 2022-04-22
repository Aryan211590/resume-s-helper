import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Steps from "./Steps";
import Deep from "./Deep";
import Buildd from "./Buildd";
import Customers from "./Customers";
import Service from "./Service";
import Questions from "./Questions";
import Cordian from "./Cordian";
import Footer from "./Footer";
import Header from "./Header";
import Whyuse from "./Whyuse";
import Sure from "./Sure";
import backtootop from "./images/back-to-top.svg";
const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const [showButton, setShowButton] = useState(false);
  var empty_array = [];
  localStorage.setItem("skill", JSON.stringify(empty_array));
  localStorage.setItem("language", JSON.stringify(empty_array));
  const scrooltop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {showButton && (
        <div
          id="hideof"
          className="back-to-top"
          onClick={scrooltop}
          id="backToTop"
        >
          <img src={backtootop} alt="" />
        </div>
      )}
      <Header />
      <Heading />
      <Service />
      <Steps />
      <Deep />
      <Sure />
      <Questions />
      <Customers />
      <Whyuse />
      {/* <Buildd /> */}
      <Cordian />
      {/* <button onClick={scrooltop}>click me</button> */}
      <Footer />
    </>
  );
};

export default Home;
