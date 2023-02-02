import React from "react";
import "../style/style.css";
import Box from "../Components/Box";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import leftLogo from "../assets/aai-white.png";
import rightLogo from "../assets/G20.png";
import years from '../assets/75yrs.png';

const Landing = (props) => {
  const str = "START";
  const navigate = useNavigate();
  const changeNavigation = () => {
    //console.log("Clicked");
    navigate("/questions");
  };

  return (
    <div className="body">
      <div className="logo-div">
        <div className="left-logo pt-4 ps-4">
          <img className="left-logo-img" src={leftLogo} />
        </div>
        <div className="right-logo pt-3 pe-4">
          <img className="border-end right-logo-img pe-4" src={rightLogo} />
          <img className="right-logo-img-2 ms-2 ps-2" src={years} />
        </div>
      </div>
      <div
        className={
          "text-danger position-relative d-flex justify-content-center landingBox"
        }
      >
        <div className="shape-outer hexagon" onClick={() => changeNavigation()}>
          <div className="shape-inner hexagon d-flex align-items-center justify-content-center">
            <p className="text-white text-center py-auto my-2 fw-bold">{str}</p>
          </div>
        </div>
      </div>
      {/* <Provider>
                <Box boxStyle="landingBox" page="landing" str="START"/>
            </Provider> */}
    </div>
  );
};

export default Landing;
