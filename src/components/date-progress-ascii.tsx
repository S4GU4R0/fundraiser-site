import React, { useEffect, useState } from "react";

function DateProgressTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Target date: June 29, 2025
  const targetDate = new Date("2025-06-29");
  const startDate = new Date("2025-05-29");

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate progress
  const totalDays = Math.ceil(
    (targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const elapsedDays = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const remainingDays = Math.max(
    0,
    Math.ceil(
      (targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24),
    ),
  );
  const progressPercentage = Math.min(
    100,
    Math.max(0, (elapsedDays / totalDays) * 100),
  );

  // Generate ASCII chart showing daily progress - much simpler and clearer
  const generateDailyChart = () => {
    const isMobile = window.innerWidth < 768;
    const chartWidth = isMobile ? 30 : 50;

    let chart = "";

    // Add a simple day-by-day visualization
    const totalDaysToShow = Math.min(totalDays, chartWidth);
    for (let day = 0; day < totalDaysToShow; day++) {
      if (day < elapsedDays) {
        chart += "■"; // Completed day
      } else if (
        day === elapsedDays &&
        progressPercentage % (100 / totalDays) > 0
      ) {
        chart += "▣"; // Current day (partial)
      } else {
        chart += "□"; // Future day
      }
    }
    chart += "\n";

    return chart;
  };
  const isOverdue = currentDate > targetDate;

  return (
    <div className="rounded-lg bg-gray-900 p-4 font-mono text-green-400">
      <div className="mb-4">
        <h1 className="mb-2 text-center text-xl font-bold text-green-300 md:text-2xl">
          🧨{" "}
          <div
            className={`inline-block ${isOverdue ? "text-red-400" : "text-yellow-400"}`}
          >
            {remainingDays}
          </div>{" "}
          days left to find housing
        </h1>
        <div className="text-center text-xs text-gray-400 md:text-sm">
          {currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}
        </div>
      </div>
      {/* ASCII Chart */}
      <div className="">
        <pre className="text-center text-xs text-green-400">
          {generateDailyChart()}
        </pre>
      </div>
    </div>
  );
}

export default DateProgressTracker;
