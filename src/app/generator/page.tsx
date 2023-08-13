"use client";

import generatePalette from "@/util/paletteGenerator";
import { useEffect, useState } from "react";
import "./generator.sass";


const Page = () => {
  const [palette, setPalette] = useState<string[]>(generatePalette(5));
  const [numberOfColors, setNumberOfColors] = useState(5);

  useEffect(() => {
    generatePalette(numberOfColors)
  },[numberOfColors])

  const handleSumColorClick = () => {
    setNumberOfColors(numberOfColors + 1)
  }

  const handleMinusColorClick = () => {
    
  }

  return (
    <div>
      <div
        className="colors-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numberOfColors},1fr)`,
        }}
      >
        {palette.map((color, colorIndex) => (
          <div
            className="color"
            key={colorIndex}
            style={{
              backgroundColor: color,
            }}
          >
            {color}
          </div>
        ))}
      </div>
      <button onClick={() => setPalette(generatePalette(numberOfColors))}>
        GENERATE
      </button>
      <button
        onClick={() => {
          handleSumColorClick()
        }}
      >
        ADD COLOR
      </button>
      <button
      >QUIT COLOR</button>
    </div>
  );
};

export default Page;
