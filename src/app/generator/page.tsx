"use client";

import generatePalette from "@/util/paletteGenerator";
import { useEffect, useState } from "react";
import "./generator.sass";
import "../main.sass";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { hslToHex } from "@/util/colorConverter";
import Image from "next/image";

const copiedToClipboard = () => toast.success("copied to clipboard!");

const Page = () => {
  const [palette, setPalette] = useState<string[]>([]);
  const [numberOfColors, setNumberOfColors] = useState(5);

  useEffect(() => {
    setPalette(generatePalette(numberOfColors));
  }, [numberOfColors]);

  const handleSumColorClick = () => {
    setNumberOfColors(numberOfColors + 1);
  };

  const handleMinusColorClick = () => {
    numberOfColors > 4 ? setNumberOfColors(numberOfColors - 1) : null;
  };

  const handleSpanClick = (color: string) => {
    navigator.clipboard.writeText(color);
    copiedToClipboard();
  };

  const handleSpaceGeneration = (e: React.KeyboardEvent) => {
    e.key == "space" ? setPalette(generatePalette(numberOfColors)) : null;
  };

  return (
    <>
      <div className="top-bar">
        <Link href="/">
          <Image 
          src="/logotype.svg"
          width={70}
          height={20}
          alt="logo"
          />
        </Link>
      </div>
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
            <span
              onClick={() => handleSpanClick(`${hslToHex(color)}`)}
              className="color-name"
              id="color-name"
            >
              {hslToHex(color)}
            </span>     
            <Toaster
              toastOptions={{
                duration: 700,
              }}
            />  
            <button id="button" onClick={() => handleSumColorClick()}>
              <Image src="/deliconN.svg" width={32} height={32} alt="icon" />
            </button>
            <button id="button" onClick={() => handleMinusColorClick()}>
              <Image src="/delicon.svg" width={32} height={32} alt="icon" />
            </button>
          </div>
        ))}
      </div>
      <button
        className="generate-button"
        onClick={() => setPalette(generatePalette(numberOfColors))}
        onKeyDown={handleSpaceGeneration}
      >
        GENERATE
      </button>
    </>
  );
};
export default Page;
