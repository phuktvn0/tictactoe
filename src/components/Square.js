import React from "react";

function Square({character, handleClick, i}) {
  return (
    <button className={"square"} onClick={() => handleClick(i)}>
      {character}
    </button>
  );
}

export default Square;
