import { createLazyFileRoute } from "@tanstack/react-router";

import { AboutSiteCard } from "@/components/about-site-card";
import { AsciiVideoCard } from "@/components/ascii-video-card";
import DateProgressTracker from "@/components/date-progress-ascii";
import DonationMethods from "@/components/donation-methods";
import FundraisingProgressTracker from "@/components/fundraising-progress";
import HousingWishlist from "@/components/wishlist";

export const Route = createLazyFileRoute("/")({
  component: WelcomeComponent,
});

function WelcomeComponent() {
  return (
    <div className="mx-auto w-[95vw] p-8">
      <div className="mx-auto grid w-[80vw] grid-cols-1 gap-4">
        <DateProgressTracker />
        <FundraisingProgressTracker />
        <DonationMethods />
        <AsciiVideoCard />
        <HousingWishlist />
        <AboutSiteCard />
      </div>
    </div>
  );
}
