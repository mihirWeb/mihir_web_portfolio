import React, { useState } from "react";

function Hamburger() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(isClicked => !isClicked);
  };

  return (
    <div
      className={`hamburger ${isClicked ? "hamburger-click" : ""}`}
      onClick={handleClick}
    >
      <span id="middle-line" className="hamburger-line"></span>
    </div>
  );
}

export default Hamburger;
