<<<<<<< HEAD
import React from "react";
import "./Home.css";
import magicBox from "../../magic-bag.png";
import Logo from "../../logo.png";
import Money from "../../money icon.png"
import Food from "../../food.png"
import Planet from "../../planet icon.png"

function Home() {
  return (
    <div id="HomePage">
      <div className="left">
      <span id="Title"><img src={Logo} id='logo'/> Too Good To Go</span>
      <span id='mottoPics' ><img  src={Food}/><img src={Money} /><img src={Planet} /></span>
      <span id="motto"> <span>Save Food</span> <span>  Save Money</span><span>Save the Planet</span> </span>
      <div id="missionvision">
      <b>"Delicious, affordable meals rescued from waste.Join us in reducing food waste one meal at a time."</b>
    <br/><br/> OUR Mission :<br/>
"Every day, countless meals go uneaten while many people struggle to afford good food. We’re here to change that. 
By purchasing fresh leftovers at reduced prices, you’re helping to reduce food waste, support local restaurants, 
and make quality food accessible to everyone."
Call to Action:
"Browse Available Meals Near You!"
"Join us in our mission  grab a meal, and make a difference!"
      </div>


      </div>
        
      <div className="right">
      <img src={magicBox} id="bagImage"/>
      </div>
        

        
      </div>
    
  );
}

export default Home;
=======
import React from "react";
import "./Home.css";
import magicBox from "../../magic-bag.png";
import Logo from "../../logo.png";

function Home() {
  return (
    <div id="HomePage">
      <div id="mission">
        <div id="logocombination">
          <img id="logo" src={Logo} />
          <p id="Title">Too good to go</p>
          <div />
         
        </div>
      </div>
      <div id="LandingImage">
        <img src={magicBox} />
      </div>
    </div>
  );
}

export default Home;
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
