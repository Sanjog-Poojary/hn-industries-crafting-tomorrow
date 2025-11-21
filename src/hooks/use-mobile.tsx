import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Hook to detect mobile viewport.
 * Returns `boolean | undefined` — undefined while running on the server / before first paint.
 * This avoids hydration mismatches and provides a safer API for callers that need to
 * render different markup only on the client.
 */
export function useIsMobile(): boolean | undefined {
  const isBrowser = typeof window !== "undefined";

  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(() =>
    isBrowser ? window.innerWidth < MOBILE_BREAKPOINT : undefined
  );

  React.useEffect(() => {
    if (!isBrowser) return;

    const mql = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    ) as MediaQueryList & {
      addEventListener?: (
        type: string,
        listener: (e: MediaQueryListEvent) => void
      ) => void;
      removeEventListener?: (
        type: string,
        listener: (e: MediaQueryListEvent) => void
      ) => void;
      addListener?: (listener: (e: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (e: MediaQueryListEvent) => void) => void;
    };

    // modern API uses addEventListener; older browsers use addListener
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(!!e.matches);
    };

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
    } else if (typeof mql.addListener === "function") {
      mql.addListener(handleChange);
    }

    // Ensure state is in sync on mount
    setIsMobile(mql.matches);

    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", handleChange);
      } else if (typeof mql.removeListener === "function") {
        mql.removeListener(handleChange);
      }
    };
  }, [isBrowser]);

  return isMobile;
}
