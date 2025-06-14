import React, { useEffect, useState } from "react";

import { AsciiVideoCard } from "@components/ascii-video-card";

function FundraisingProgressTracker() {
  const [donations, setDonations] = useState([
    { amount: 100, source: "venmo", date: new Date("2025-06-05") },
    { amount: 80, source: "venmo", date: new Date("2025-06-03") },
    { amount: 15, source: "venmo", date: new Date("2025-06-02") },
    { amount: 50, source: "kofi", date: new Date("2025-06-02") },
    { amount: 100, source: "kofi", date: new Date("2025-05-31") },
    { amount: 40, source: "kofi", date: new Date("2025-05-31") },
    { amount: 30, source: "venmo", date: new Date("2025-06-02") },
    { amount: 50, source: "venmo", date: new Date("2025-06-01") },
    { amount: 25, source: "venmo", date: new Date("2025-06-01") },
    { amount: 20, source: "cashapp", date: new Date("2025-06-01") },
    { amount: 50, source: "venmo", date: new Date("2025-05-31") },
    { amount: 50, source: "venmo", date: new Date("2025-05-30") },
    { amount: 50, source: "venmo", date: new Date("2025-05-30") },
    { amount: 45, source: "venmo", date: new Date("2025-05-31") },
  ]);

  const goalAmount = 2000;
  const currentAmount = donations.reduce(
    (sum, donation) => sum + donation.amount,
    0,
  );
  const progressPercentage = Math.min(100, (currentAmount / goalAmount) * 100);
  const remainingAmount = Math.max(0, goalAmount - currentAmount);

  // Generate ASCII progress bar - mobile optimized
  const generateProgressBar = () => {
    const barWidth = 15; // Fixed small width for mobile
    const filledBlocks = Math.floor((progressPercentage / 100) * barWidth);
    const emptyBlocks = barWidth - filledBlocks;

    let bar = "";
    bar += "\n Progress:\n";
    bar += " [";

    // Add filled portion
    for (let i = 0; i < filledBlocks; i++) {
      bar += "█";
    }

    // Add empty portion
    for (let i = 0; i < emptyBlocks; i++) {
      bar += "░";
    }

    bar += "]\n";
    bar += ` ${progressPercentage.toFixed(0)}%\n`;

    return bar;
  };

  // Generate ASCII dollar visualization by source
  const generateDollarChart = () => {
    const sourceIcons: Record<string, string> = {
      venmo: "💙",
      cashapp: "💚",
      kofi: "☕",
    };

    const sourceAmounts = donations.reduce<Record<string, number>>(
      (acc, donation) => {
        acc[donation.source] = (acc[donation.source] || 0) + donation.amount;
        return acc;
      },
      {},
    );

    let chart = "\n By Source:\n";

    // Show each source with visual representation
    Object.entries(sourceAmounts).forEach(([source, amount]) => {
      const count = Math.floor(amount / 50); // Each icon = $50
      chart += ` ${source}: `;
      // for (let i = 0; i < count; i++) {
      //   chart += sourceIcons[source] || "💰";
      // }
      chart += `$${amount}\n`;
    });

    return chart;
  };

  const isGoalReached = currentAmount >= goalAmount;

  return (
    <div className="rounded-lg p-4">
      <div className="mb-4 text-center">
        <div className="mb-2 text-2xl">
          {isGoalReached ? "🎉" : "💰"}{" "}
          <span className="text-lg font-bold text-green-500">
            ${currentAmount} / ${goalAmount}
          </span>
        </div>
        {isGoalReached ? (
          <div className="text-base font-semibold text-green-600">
            🎯 Goal Reached! 🎯
          </div>
        ) : (
          <div className="text-sm text-gray-400">${remainingAmount} to go</div>
        )}
      </div>

      {/* ASCII Visualizations - mobile optimized */}
      <div className="rounded-lg bg-gray-900 p-3 font-mono text-xs leading-tight text-green-400">
        <pre>{generateProgressBar()}</pre>
        <pre>{generateDollarChart()}</pre>
      </div>

      {/* Stats - mobile stack */}
      <div className="mt-3 space-y-2">
        <div className="rounded-lg border bg-gray-900 p-2 text-center">
          <div className="inline-block bg-green-500 p-1 text-lg font-bold">
            {donations.length}
          </div>{" "}
          <div className="inline-block text-xs text-gray-100">donations</div>
        </div>
      </div>

      {isGoalReached && (
        <div className="mt-3 text-center">
          <div className="inline-block rounded-full bg-green-100 px-3 py-2 text-sm font-semibold text-green-800">
            🏆 Goal Reached! 🏆
          </div>
        </div>
      )}
    </div>
  );
}

export default FundraisingProgressTracker;
