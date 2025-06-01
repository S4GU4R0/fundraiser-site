import React from "react";

import dogsPlayingGif from "../assets/dogs_playing.gif";

export function AsciiVideoCard() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-lg bg-gray-800 p-4 shadow-lg">
      <div className="flex w-full justify-center">
        <img
          src={dogsPlayingGif}
          alt="ASCII Dogs Playing"
          className="w-full max-w-xs rounded border border-green-700 bg-black"
          style={{ fontFamily: "monospace" }}
        />
      </div>
    </div>
  );
}
