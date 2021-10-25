import React from "react";
import { Link } from "react-router-dom";
import UnGodlyHour from "../img/UGH.gif"
import "../styles/Home.css";

function Home() {
    return (
      <div className="home" style={{ backgroundImage: `url(${UnGodlyHour})` }}>
        <div className="headerContainer">
        
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Home;
