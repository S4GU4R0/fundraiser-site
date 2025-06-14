import React from "react";

export function UpdatesTimeline() {
  const updates = [
    {
      date: "June 13, 2025",
      title: "Set up an Amazon list",
      description:
        "I plan to get a tent and stove, but I need help with other supplies still",
      icon: "📦",
    },
    {
      date: "June 11, 2025",
      title: "Found a place to stay!",
      description:
        "My friend said yes - I'll be camping on their property starting June 30th.",
      icon: "🏕️",
    },
  ];

  return (
    <div className="mt-4 rounded-lg border-2 border-purple-200 bg-gradient-to-br from-transparent to-purple-800 p-4">
      <div className="mb-4 text-center">
        <h2 className="mb-2">
          📅 <span className="text-lg font-bold text-white">Updates</span>
        </h2>
        <h3 className="text-sm text-white">
          I post frequent updates on TikTok as well.
        </h3>
      </div>

      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex-shrink-0 text-2xl">{update.icon}</div>
            <div>
              <div className="text-sm text-blue-200">{update.date}</div>
              <div className="font-semibold text-white">{update.title}</div>
              <div className="text-sm text-white/90">{update.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
