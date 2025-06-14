import { createLazyFileRoute } from "@tanstack/react-router";

import { AboutSiteCard } from "@/components/about-site-card";
import { AsciiVideoCard } from "@/components/ascii-video-card";
import DateProgressTracker from "@/components/date-progress-ascii";
import DonationMethods from "@/components/donation-methods";
import FundraisingProgressTracker from "@/components/fundraising-progress";
import { UpdatesTimeline } from "@/components/updates";

export const Route = createLazyFileRoute("/")({
  component: WelcomeComponent,
});

function WelcomeComponent() {
  return (
    <div className="mx-auto w-[95vw] p-4">
      <DateProgressTracker />
      <div className="mb-2 flex flex-col items-start justify-between rounded-lg bg-gradient-to-br from-transparent to-orange-900 p-3">
        <div className="flex text-left text-orange-800">
          <div className="text-xs">📦 &nbsp;</div>
          <div className="mb-2 text-sm text-white">Amazon Wishlist</div>
        </div>
        <div className="font-mono text-sm text-white">
          Survival gear while I look for a new job in my new place. Used stuff
          is welcome. DM me on TikTok if you'd like to send me something
          directly.
        </div>
        <a
          href="https://a.co/9oHazvr"
          target="_blank"
          className="mt-2 w-full animate-pulse self-end rounded-md bg-orange-600 px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-orange-700"
        >
          🤍 GET GEAR 🤍
        </a>
      </div>
      <div className="mx-auto grid w-[90vw] grid-cols-2 gap-1">
        <DonationMethods />
        <FundraisingProgressTracker />
      </div>
      <div className="mx-auto grid w-[80vw] grid-cols-1 gap-1">
        {/* Quick amounts suggestion */}
        <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
          <div className="text-center text-sm">
            <div className="mb-1 font-semibold text-yellow-800">
              💡 Suggested amounts
            </div>
            <div className="text-yellow-700">$5 • $10 • $25 • $50 • $100</div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-[80vw] grid-cols-3 gap-1">
        <div className="col-span-1">
          <AsciiVideoCard />
        </div>
        <div className="col-span-2">
          <AboutSiteCard />
        </div>
      </div>

      <div className="mx-auto grid max-w-[90vw] grid-cols-1 gap-1">
        <UpdatesTimeline />
      </div>
    </div>
  );
}
