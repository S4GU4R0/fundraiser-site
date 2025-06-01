import React, { useState } from "react";

function DonationMethods() {
  const [copiedMethod, setCopiedMethod] = useState("");

  const donationMethods = [
    {
      name: "Venmo",
      handle: "@S4GU4R0",
      icon: "💙",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      name: "CashApp",
      handle: "$S4GU4R0",
      icon: "💚",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      textColor: "text-green-600",
    },
    {
      name: "Ko-fi",
      handle: "ko-fi.com/S4GU4R0",
      icon: "☕",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      textColor: "text-orange-600",
    },
  ];

  const copyToClipboard = (text: string, methodName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMethod(methodName);
      setTimeout(() => setCopiedMethod(""), 2000);
    });
  };

  const generateDonationASCII = () => {
    return `
 ╔═══════════════╗
 ║ Every dollar  ║
 ║ makes a       ║
 ║ difference!   ║
 ╚═══════════════╝
    `;
  };

  return (
    <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-transparent to-pink-900 p-4 shadow-lg">
      {/* ASCII Art */}
      <div className="text-md mb-4 overflow-x-auto rounded-lg p-3 text-center font-mono font-bold leading-tight text-white">
        <pre>{generateDonationASCII()}</pre>
      </div>

      {/* Donation Methods */}
      <div className="space-y-3">
        {donationMethods.map((method, index) => (
          <div
            key={index}
            className="rounded-lg border-2 border-gray-200 bg-white p-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {method.name}
                  </div>
                  <div className={`text-sm ${method.textColor} font-mono`}>
                    {method.handle}
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(method.handle, method.name)}
                className={`px-3 py-2 ${method.color} ${method.hoverColor} rounded-md text-xs font-semibold text-white transition-colors`}
              >
                {copiedMethod === method.name ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick amounts suggestion */}
      <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
        <div className="text-center text-sm">
          <div className="mb-1 font-semibold text-yellow-800">
            💡 Suggested amounts
          </div>
          <div className="text-yellow-700">$5 • $10 • $25 • $50 • $100</div>
        </div>
      </div>
    </div>
  );
}

export default DonationMethods;
