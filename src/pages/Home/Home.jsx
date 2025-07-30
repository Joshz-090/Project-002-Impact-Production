import React from "react";
import Transition from "./comps/Transition";
import WhiteToBlackTransition from "./comps/WhiteToBlackTransition";
import HomeComp1 from "./comps/HomeComp1";
import HomeComp2 from "./comps/HomeComp2";
import HomeComp3 from "./comps/HomeComp3";
import HomeComp4 from "./comps/HomeComp4";
import HomeComp5 from "./comps/HomeComp5";
import HomeComp6 from "./comps/HomeComp6";
import HomeComp7 from "./comps/HomeComp7";
import HomeComp8 from "./comps/HomeComp8";
import backgroundImage from "../../assets/Screenshot.png"; // Import your background image

const Home = () => (
  <>
    <HomeComp1 />
    <div>
      <Transition />
    </div>

    <HomeComp2 />
    <HomeComp3
      primaryColor="#fffb22ff"
      textColor="#f5f5f5"
      lightBg="#212121ff"
      stats={[
        { number: "8+", label: "Cities" },
        { number: "11K+", label: "Participants" },
        { number: "6+", label: "Years of Exprians" },
        { number: "15+", label: "Successful Events" },
      ]}
      backgroundImage={backgroundImage} 
    />
    <HomeComp4 />
    <HomeComp5 />
    <HomeComp6 />
    <WhiteToBlackTransition />
    <HomeComp7 />
    <HomeComp8 />
  </>
);

export default Home;
