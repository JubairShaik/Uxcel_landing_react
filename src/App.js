import React from "react";
import "./app.css";
import {
  Navbar,
  Hero,
  Benefits,
  ProSection,
  Howitwork,
  Footer,
  UxDesignCertificationsSection ,
} from "./components/index";
 
function App() {
  return (
    <div  >
       <div className="Navbar">
        <Navbar />
      </div>
      <div className="Hero">
        <Hero />
      </div>
      <div className="Benefits">
        <Benefits />
      </div>
      <UxDesignCertificationsSection/>



      <div>
        <Howitwork />
      </div> 
      <ProSection/>



  
      <div className="Footer">
        <Footer />
      </div> 
    </div>
  );
}

export default App;
