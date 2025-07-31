import React from "react";
import "./marquee.css"; // Import CSS for styling

const Marquee = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee">{text}</div>
    </div>
  );
};

export default Marquee;
