import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createRegionRef, REGION_PREFIXES } from "./lib/region";

export const getRouter = () => {
  const queryClient = new QueryClient();
  const region = createRegionRef();

  const router = createRouter({
    routeTree,
    context: { queryClient, region },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    rewrite: {
      // Strip the region prefix so /in/... and /ae/... resolve to the shared routes.
      input: ({ url }) => {
        const match = REGION_PREFIXES.find(
          (p) => url.pathname === p || url.pathname.startsWith(`${p}/`),
        );
        region.current = match ?? "";
        if (!match) return undefined;
        const next = new URL(url);
        next.pathname = url.pathname.slice(match.length) || "/";
        return next;
      },
      // Re-add the region prefix to every href the router generates.
      output: ({ url }) => {
        if (!region.current) return undefined;
        const next = new URL(url);
        next.pathname =
          url.pathname === "/" ? region.current : `${region.current}${url.pathname}`;
        return next;
      },
    },
  });

  return router;
};
