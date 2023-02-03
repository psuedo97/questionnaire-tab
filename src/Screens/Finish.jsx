import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import img from "../assets/QR1.jpg";
import leftLogo from "../assets/aai-white.png";
import rightLogo from "../assets/G20.png";
import years from "../assets/75yrs.png";

const Finish = (props) => {
  const {
    score: { score },
  } = props;
  const navigate = useNavigate();

  //console.log("Hello>>>>",score);
  return (
    <>
      <div className="bodyQues"></div>
      <div className="logo-div">
        <div className="left-logo pt-4 ps-4">
          <img className="left-logo-img" src={leftLogo} />
        </div>
        <div className="right-logo pt-3 pe-4">
          <img className="border-end right-logo-img pe-4" src={rightLogo} />
          <img className="right-logo-img-2 ms-2 ps-2" src={years} />
        </div>
      </div>
      <div className="finishBox">
        <h1 className="text-ty text-center">THANK YOU</h1>
        <div className="message-box text-center">
          <p className="text-score text-center">
            for participating in the Quiz.
            <br />
            your score is {score}/5
          </p>
          {/* <img className='image text-center rounded' src={img}/> */}
        </div>
        <div
          className={
            "text-danger position-relative d-flex justify-content-center pt-3"
          }
        >
          <div className="shape-outer hexagon" onClick={() => navigate("/")}>
            <div className="shape-inner hexagon d-flex align-items-center justify-content-center">
              <p className="text-white text-center py-auto my-2 fw-bold ">
                Home
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, null)(Finish);
