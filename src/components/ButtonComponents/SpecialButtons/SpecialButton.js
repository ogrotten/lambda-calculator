import React from "react";

const SpecialButton = props => {
  return (
    <button className="">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.spec}
    </button>
  );
};

export default SpecialButton;