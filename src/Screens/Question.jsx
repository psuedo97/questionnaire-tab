import React, { useEffect, useState } from "react";
import Box from "../Components/Box";
import Data from "../DummyData/questionTable.json";
import leftLogo from "../assets/aai-white.png";
import rightLogo from "../assets/G20.png";
import years from "../assets/75yrs.png";

const Question = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const quizData = (arr, num) => {
    var newArr = [...arr].sort(() => 0.5 - Math.random());
    return newArr.slice(0, num);
  };
  const shuffleArray = (array, num) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array.slice(0, num);
  };
  useEffect(() => {
    if (count === 0) {
      var list = quizData(Data, 5);
      //console.log("Hello world>>>>>",list)
      setData(list);
    }
    setCount(count + 1);
  }, []);

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
      <div className="questionBox">
        <Box page="question" data={shuffleArray(Data, 5)} />
        {/* <Box page="questionChoice" boxStyle="mcq"/> */}
      </div>
    </>
  );
};

export default Question;
