import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import TUX from "./../public/linux-tux.svg";
const viewSize = 572.801;

export const RainDrop: React.FC<{
  delay: number;
  x: string;
  size: number;
}> = ({ delay, x, size }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const drop = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 1000,
    },
  });

  const top = interpolate(drop, [0, 1], [-0.2, 1.1]);

  return (
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="130"
      height="130"
      id="svg2"
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      style={{
        width: 100,
        position: "absolute",
        left: x,
        top: top * 100 + "%",
        transform: `scale(${size})`,
      }}
    >
      <path
        d="M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z"
        id="path4"
        fill="#ff0707"
      />
    </svg>
  

  );
};