import React from "react";
// import "./horizontal-animation.styles.css";

export const HorizontalAnimation = ({ fixed, word1, word2 }) => {
  return (
    <div className="horizontal__animation__container">
      <p style={{color : 'red', fontSize : '30px'}}>{fixed}</p>
      <div className="horizontal__animation__words">
        <p style={{color : 'black', fontSize : '30px'}}>{word1}</p>
        <p style={{color : 'black', fontSize : '30px'}}>{word2}</p>
      </div>
    </div>
  );
};
