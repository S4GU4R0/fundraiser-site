import React, { useState } from "react";

import SimpleBar from "simplebar-react";

function DonationMethods() {
  const [copiedMethod, setCopiedMethod] = useState("");

  const donationMethods = [
    {
      name: "Venmo",
      handle: "@S4GU4R0",
      icon: "💙",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      textColor: "text-white",
      bgColor: "bg-blue-600/10",
    },
    {
      name: "CashApp",
      handle: "$S4GU4R0",
      icon: "💚",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      textColor: "text-white",
      bgColor: "bg-green-600/10",
    },
    {
      name: "Ko-fi",
      handle: "ko-fi.com/S4GU4R0",
      icon: "🧡",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      textColor: "text-white",
      bgColor: "bg-orange-600/10",
    },
  ];

  const copyToClipboard = (text: string, methodName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMethod(methodName);
      setTimeout(() => setCopiedMethod(""), 2000);
    });
  };

  return (
    <div className="rounded-lg p-4">
      {/* Donation Methods */}
      <div className="space-y-3">
        {donationMethods.map((method, index) => (
          <div key={index} className={`rounded-lg ${method.bgColor} p-3`}>
            <div className="flex flex-col items-start justify-between">
              <div className="flex text-left text-gray-800">
                <div className="text-xs">{method.icon} &nbsp;</div>
                <div className={`text-sm ${method.textColor}`}>
                  {method.name}
                </div>
              </div>
              <div
                className={`text-sm font-bold ${method.textColor} font-mono`}
              >
                {method.handle}
              </div>
              <button
                onClick={() => copyToClipboard(method.handle, method.name)}
                className={`px-3 py-2 ${method.color} ${method.hoverColor} mt-2 self-end rounded-md text-xs font-semibold text-white transition-colors`}
              >
                {copiedMethod === method.name ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonationMethods;
