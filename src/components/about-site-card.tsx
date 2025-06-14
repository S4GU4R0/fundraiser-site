import React from "react";

export function AboutSiteCard() {
  return (
    <div className="max-h-32 rounded-lg border-2 border-green-200 bg-gradient-to-br from-transparent to-green-800 p-2">
      <div className="mb-4 text-center">
        <div className="mb-2 text-lg">
          👋{" "}
          <span className="text-lg font-bold text-white">Built by S4GU4R0</span>
        </div>
        <div className="font-sans text-xs text-white">
          I built this site and offer consultations for tech questions. DM for
          info.
        </div>
      </div>
    </div>
  );
}
