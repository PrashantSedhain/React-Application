import React from "react";
import dynamicClasses from "./Cockpit.css";

const cockpit = (props) => {
  return (
    <div>
      <h1> Hi, I am a react app</h1>
      <button
        className={dynamicClasses.button}
        clicked={props.switchNameHandler}
      >
        {props.viewText}
      </button>
    </div>
  );
};

export default cockpit;
