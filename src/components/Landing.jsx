import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Landingbody from "./Landingbody";
import Infobody from "./Infobody";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    localStorage.removeItem("UI");
    localStorage.removeItem("AT");
  });
  return (
    <div>
      <Navbar />
      <Landingbody />
      <Infobody />
      <Footer />
    </div>
  );
}

export default Home;
