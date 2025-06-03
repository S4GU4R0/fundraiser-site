import React from "react";

import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
} from "@tanstack/react-router";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <HeadContent />
      <div className="bg-gray-900 font-mono">
        <Outlet />
      </div>
      {/* <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  ),
  head: () => ({
    meta: [
      { title: "S4GU4R0 Housing & Supplies Fundraiser" },
      {
        name: "description",
        content:
          "Urgent fundraiser for S4GU4R0, who is at risk of being unsheltered with dogs. Donate or provide supplies to help keep us safe and together.",
      },
      {
        property: "og:title",
        content: "S4GU4R0 Housing & Supplies Fundraiser",
      },
      {
        property: "og:description",
        content:
          "Urgent fundraiser for S4GU4R0, who is at risk of being unsheltered with dogs. Donate or provide supplies to help keep us safe and together.",
      },
      {
        property: "og:image",
        content: "/studio-b1897b2d25548010e79272580553c07a-nicvbhlm.jpg",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "S4GU4R0 Housing & Supplies Fundraiser",
      },
      {
        name: "twitter:description",
        content:
          "Urgent fundraiser for S4GU4R0, who is at risk of being unsheltered with dogs. Donate or provide supplies to help keep us safe and together.",
      },
      {
        name: "twitter:image",
        content: "/studio-b1897b2d25548010e79272580553c07a-nicvbhlm.jpg",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "72x72",
        href: "/favicon.png",
      },
    ],
  }),
});
