"use client"

import "./main.sass";
import Nav from "@/components/nav/Nav";
import Button from "@/components/mainButton/Button";
import generateRandomColor from "@/util/randomColorGenerator";

export default function Home() {

  let paletteString = [" P", "a", "l", "e", "t", "t", "e"];

  return (
    <main>
      <Nav />
      <h1 className="main-title text-center fw600 fs48">
        Your interfaces deserves <br /> a better
        {paletteString.map((item, i) => {
          return (
            <span
              key={i}
              style={{
                color: generateRandomColor(),
              }}
              className="colorful-text"
            >
              {item}
            </span>
          );
        })}
      </h1>
      <div className="second-title-container h-center">
        <h4 className="second-main-title text-center fw300 fs18 h-center">
          Elevate your design with a stunning color palette that breathes life
          into your interfaces. Discover the power of captivating colors and
          create visually striking experiences that engage and inspire.
        </h4>
      </div>
      <Button></Button>
    </main>
  );
}
