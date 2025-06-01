import React from "react";

export function AboutSiteCard() {
  return (
    <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-br from-transparent to-blue-900 p-4 shadow-lg">
      <div className="mb-4 text-center">
        <div className="mb-2 text-2xl">
          👋{" "}
          <span className="text-lg font-bold text-blue-400">
            Built by S4GU4R0
          </span>
        </div>
        <div className="text-sm text-gray-300">
          I built this site and offer consultations for tech questions. Reach
          out if interested.
        </div>
      </div>
    </div>
  );
}
