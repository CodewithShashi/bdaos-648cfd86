import { useRouter } from "@tanstack/react-router";

export type RegionPrefix = "" | "/in" | "/ae";

export type RegionRef = { current: RegionPrefix };

export const REGION_PREFIXES: RegionPrefix[] = ["/in", "/ae"];

export function createRegionRef(): RegionRef {
  return { current: "" };
}

/** Region prefix for the current request/session, e.g. "/in", "/ae" or "" for global. */
export function useRegionPrefix(): RegionPrefix {
  const router = useRouter();
  const ref = (router.options.context as { region?: RegionRef } | undefined)?.region;
  return ref?.current ?? "";
}

/** Build a region-aware absolute path for plain anchors. */
export function regionHref(prefix: RegionPrefix, path: string): string {
  if (!prefix) return path;
  if (!path.startsWith("/")) return path;
  return path === "/" ? prefix : `${prefix}${path}`;
}
