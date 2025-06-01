import "simplebar-react/dist/simplebar.min.css";

import React, { useState } from "react";

import { Captcha } from "recaptz";
import SimpleBar from "simplebar-react";

type WishlistPriority = "high" | "medium" | "low";
type WishlistCategory = "supplies" | "information" | "service";

interface WishlistItem {
  id: number;
  item: string;
  category: WishlistCategory;
  priority: WishlistPriority;
  claimed: boolean;
  claimedBy: string;
  claimedByUrl?: string;
  estimatedCost: number;
  description: string;
}

function HousingWishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      item: "3 collapsible dog bowls",
      category: "supplies",
      priority: "medium",
      claimed: false,
      claimedBy: "",
      claimedByUrl: "",
      estimatedCost: 0,
      description: "fabric is more durable than silicone",
    },
    {
      id: 2,
      item: "darn tough socks",
      category: "supplies",
      priority: "medium",
      claimed: false,
      claimedBy: "",
      claimedByUrl: "",
      estimatedCost: 0,
      description:
        "kind of pricey but they are known to last a lifetime. socks are the most commonly needed item.",
    },
    {
      id: 3,
      item: "referrals for daytime dog boarding",
      category: "information",
      priority: "medium",
      claimed: false,
      claimedBy: "",
      claimedByUrl: "",
      estimatedCost: 0,
      description: "if i cannot find shelter. this will help me keep my job",
    },
    {
      id: 4,
      item: "dry bag",
      category: "supplies",
      priority: "medium",
      claimed: false,
      claimedBy: "",
      claimedByUrl: "",
      estimatedCost: 0,
      description: "for doing laundry",
    },
    {
      id: 5,
      item: "backpacking pack",
      category: "supplies",
      priority: "high",
      claimed: false,
      claimedBy: "",
      claimedByUrl: "",
      estimatedCost: 0,
      description:
        "large enough to accommodate supplies for 1 person,1 large dog, 2 small dogs",
    },
  ]);

  const [newItemText, setNewItemText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("supplies");
  const [claimName, setClaimName] = useState("");
  const [claimingItem, setClaimingItem] = useState(null);
  const [showClaimed, setShowClaimed] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<
    WishlistCategory | "all"
  >("all");

  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [captchaItem, setCaptchaItem] = useState<WishlistItem | null>(null);

  const categories = {
    supplies: {
      icon: "🛠️",
      label: "Supplies",
      color: "bg-green-100 text-green-800",
    },
    information: {
      icon: "ℹ️",
      label: "Information",
      color: "bg-yellow-100 text-yellow-800",
    },
    service: {
      icon: "🤝",
      label: "Service",
      color: "bg-purple-100 text-purple-800",
    },
  };

  const priorities = {
    high: { label: "High", color: "bg-red-100 text-red-800", icon: "🔥" },
    medium: {
      label: "Medium",
      color: "bg-orange-100 text-orange-800",
      icon: "⭐",
    },
    low: { label: "Low", color: "bg-gray-100 text-gray-800", icon: "💡" },
  };

  const emailUser = "S4GU4R0";
  const emailDomain = "icloud.com";
  const email = `${emailUser}@${emailDomain}`;

  const handleAddItem = () => {
    if (newItemText.trim()) {
      const newItem: WishlistItem = {
        id: Date.now(),
        item: newItemText.trim(),
        category: selectedCategory as WishlistCategory,
        priority: "medium",
        claimed: false,
        claimedBy: "",
        claimedByUrl: "",
        estimatedCost: 0,
        description: "",
      };
      setWishlistItems((prev) => [...prev, newItem]);
      setNewItemText("");
    }
  };

  const handleUnclaimItem = (itemId) => {
    setWishlistItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, claimed: false, claimedBy: "" } : item,
      ),
    );
  };

  const sortedItems = [...wishlistItems].sort((a, b) => {
    // Sort by priority (urgency) first: high, medium, low
    const priorityOrder: Record<string, number> = {
      high: 0,
      medium: 1,
      low: 2,
    };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    // Then by claimed status (unclaimed first)
    if (a.claimed !== b.claimed) return a.claimed - b.claimed;
    // Then by category
    return a.category.localeCompare(b.category);
  });

  const stats = {
    total: wishlistItems.length,
    claimed: wishlistItems.filter((item) => item.claimed).length,
    highPriority: wishlistItems.filter(
      (item) => item.priority === "high" && !item.claimed,
    ).length,
  };

  // Filtered and sorted items based on showClaimed and categoryFilter
  const visibleItems = sortedItems.filter(
    (item) =>
      (showClaimed || !item.claimed) &&
      (categoryFilter === "all" || item.category === categoryFilter),
  );

  const handleProvideClick = (item: WishlistItem) => {
    setCaptchaItem(item);
    setCaptchaValid(false);
    setCaptchaOpen(true);
  };

  const handleCaptchaSubmit = () => {
    if (captchaValid && captchaItem) {
      setCaptchaOpen(false);
      setTimeout(() => {
        window.open(
          `mailto:${email}?subject=${encodeURIComponent(
            `Provide request: ${captchaItem.item}`,
          )}&body=${encodeURIComponent(
            `Hello,\n\nI would like to provide the following wishlist item:\n\nItem: ${captchaItem.item}\n\n---\nPlease fill out the following (optional):\n- Name to display (or write 'anonymous'):\n- Link to your website/social (optional):\n\nThank you!`,
          )}`,
          "_blank",
        );
      }, 100);
    }
  };

  return (
    <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-bl from-transparent to-purple-900 p-4 shadow-lg">
      {/* Header */}
      <div className="mb-4 text-center">
        <div className="mb-2 text-2xl">
          🏡{" "}
          <span className="text-lg font-bold text-purple-400">
            Housing Wishlist
          </span>
        </div>
        <div className="text-sm text-gray-300">
          Help beyond donations - every bit counts!
        </div>
      </div>

      {/* Stats */}
      <div className="mb-4 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-gray-800 p-2">
          <div className="text-lg font-bold text-white">{stats.total}</div>
          <div className="text-xs text-gray-400">total items</div>
        </div>
        <div className="rounded-lg bg-gray-800 p-2">
          <div className="text-lg font-bold text-green-400">
            {stats.claimed}
          </div>
          <div className="text-xs text-gray-400">claimed</div>
        </div>
        <div className="rounded-lg bg-gray-800 p-2">
          <div className="text-lg font-bold text-red-400">
            {stats.highPriority}
          </div>
          <div className="text-xs text-gray-400">urgent</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button
          className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${categoryFilter === "all" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-purple-500"}`}
          onClick={() => setCategoryFilter("all")}
        >
          All
        </button>
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            className={`rounded px-3 py-1 text-xs font-semibold transition-colors ${categoryFilter === key ? cat.color + " bg-opacity-80" : "bg-gray-700 text-gray-200 hover:bg-purple-500"}`}
            onClick={() => setCategoryFilter(key as WishlistCategory)}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Show/hide claimed toggle */}
      <div className="mb-2 flex justify-end">
        <button
          onClick={() => setShowClaimed((prev) => !prev)}
          className="flex items-center gap-1 rounded bg-gray-700 px-3 py-1 text-xs text-white hover:bg-purple-600"
          aria-label={showClaimed ? "Hide claimed items" : "Show claimed items"}
        >
          {showClaimed ? (
            <span role="img" aria-label="Hide claimed items">
              🙈
            </span>
          ) : (
            <span role="img" aria-label="Show claimed items">
              👁️
            </span>
          )}
          {showClaimed ? "Hide" : "Show"} claimed items
        </button>
      </div>

      {/* Wishlist items */}

      <SimpleBar
        className="max-w-full pb-2"
        autoHide={false}
        scrollbarMinSize={50}
      >
        <div className="flex gap-3 pb-2">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={`min-w-[200px] max-w-[220px] flex-shrink-0 rounded-lg border p-3 transition-all ${
                item.claimed
                  ? "border-gray-600 bg-gray-800 opacity-75"
                  : "border-gray-700 bg-gray-900 hover:border-purple-500"
              }`}
            >
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {item.claimed ? "✅" : "⭕"} {item.item}
                  </span>
                </div>

                <div className="mb-2 flex flex-wrap gap-1">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${categories[item.category].color}`}
                  >
                    {categories[item.category].icon}{" "}
                    {categories[item.category].label}
                  </span>
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${priorities[item.priority].color}`}
                  >
                    {priorities[item.priority].icon}{" "}
                    {priorities[item.priority].label}
                  </span>
                  {item.estimatedCost > 0 && (
                    <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                      ~${item.estimatedCost}
                    </span>
                  )}
                </div>

                {item.description && (
                  <div className="mb-2 text-xs text-gray-400">
                    {item.description}
                  </div>
                )}

                {item.claimed && (
                  <div className="text-xs text-green-400">
                    💚 Provided by{" "}
                    {item.claimedByUrl ? (
                      <a
                        href={item.claimedByUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-green-300"
                      >
                        {item.claimedBy}
                      </a>
                    ) : (
                      item.claimedBy
                    )}
                  </div>
                )}
              </div>
              <div className="mt-3 flex justify-center">
                {!item.claimed ? (
                  <button
                    type="button"
                    className="inline-block rounded-md bg-purple-600 px-4 py-2 text-center text-xs font-semibold text-white shadow transition-colors hover:bg-purple-700"
                    onClick={() => handleProvideClick(item)}
                    aria-label={`Provide ${item.item}`}
                  >
                    Provide
                  </button>
                ) : (
                  <button
                    onClick={() => handleUnclaimItem(item.id)}
                    className="inline-block rounded-md bg-gray-600 px-4 py-2 text-center text-xs font-semibold text-white shadow transition-colors hover:bg-gray-700"
                  >
                    Unclaim
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>

      {/* Progress indicator */}
      {stats.total > 0 && (
        <div className="mt-4 text-center">
          <div className="text-sm text-gray-300">
            {stats.claimed} of {stats.total} items claimed (
            {Math.round((stats.claimed / stats.total) * 100)}%)
          </div>
          <div className="mt-2 font-mono text-sm text-purple-400">
            {"[" +
              "#".repeat(Math.round((stats.claimed / stats.total) * 20)) +
              "-".repeat(20 - Math.round((stats.claimed / stats.total) * 20)) +
              "]"}
          </div>
        </div>
      )}

      {captchaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="mx-2 w-full max-w-xs rounded-lg border-2 border-green-200 bg-gray-900 p-4 shadow-lg">
            <h2 className="mb-2 text-center text-lg font-bold text-green-400">
              Sorry, I don't want to get harassed.
            </h2>
            <p className="mb-2 text-center text-xs text-gray-300">
              Tap the speaker for audio.<span>&nbsp;</span>
              <span role="img" aria-label="down arrow" className="inline">
                👇
              </span>
              <span className="sr-only">
                Audio support is available for visually impaired users.
              </span>
            </p>
            <Captcha
              type="mixed"
              length={5}
              onValidate={setCaptchaValid}
              darkMode
              autoFocus
              showSuccessAnimation
              enableAudio
              className="mb-4"
              inputButtonStyle="rounded border-2 border-green-400 bg-green-600 text-white px-3 py-2 text-xs font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            />
            <div className="mt-4 flex justify-between gap-2">
              <button
                className="flex-1 rounded bg-gray-700 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-600"
                onClick={() => setCaptchaOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`flex-1 rounded border-2 border-green-400 px-3 py-2 text-xs font-semibold shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${captchaValid ? "bg-green-600 text-white hover:bg-green-700" : "cursor-not-allowed border-gray-400 bg-gray-400 text-gray-200"}`}
                onClick={handleCaptchaSubmit}
                disabled={!captchaValid}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HousingWishlist;
