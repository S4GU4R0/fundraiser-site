import React from "react";

import dogsPlayingGif from "../assets/dogs_playing.gif";

export function AsciiVideoCard() {
  return (
    <div className="mx-auto my-4 mr-2 flex max-w-md flex-col items-center rounded-lg">
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
