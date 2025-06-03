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
      // All OG, Twitter, and description meta tags are now in index.html and should be removed from here
    ],
    links: [
      // The favicon link is now in index.html and should be removed from here
    ],
  }),
});
