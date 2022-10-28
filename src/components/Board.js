import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square 
          character={squares[0]}
          handleClick={handleClick}
          i={0}
          /><Square 
          character={squares[1]}
          handleClick={handleClick}
          i={1}
          /><Square 
          character={squares[2]}
          handleClick={handleClick}
          i={2}
          />
          </div>
          <div className="board-row">
          <Square 
          character={squares[3]}
          handleClick={handleClick}
          i={3}
          /><Square 
          character={squares[4]}
          handleClick={handleClick}
          i={4}
          /><Square 
          character={squares[5]}
          handleClick={handleClick}
          i={5}
          />
          </div><div className="board-row">
          <Square 
          character={squares[6]}
          handleClick={handleClick}
          i={6}
          /><Square 
          character={squares[7]}
          handleClick={handleClick}
          i={7}
          /><Square 
          character={squares[8]}
          handleClick={handleClick}
          i={8}
          />
          </div>
      </div>
    </div>
  );
}
