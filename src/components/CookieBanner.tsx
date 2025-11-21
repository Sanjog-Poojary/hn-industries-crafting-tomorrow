import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COOKIE_KEY = "hn_cookie_consent";

export default function CookieBanner() {
  const [accepted, setAccepted] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(COOKIE_KEY);
      setAccepted(raw === "1");
    } catch {
      setAccepted(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {
      void 0;
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(90%,_56rem)] rounded-lg bg-card p-4 shadow-lg border border-border"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-foreground">
          We use cookies to improve your experience. By using this site you
          agree to our use of cookies.
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="#privacy" className="text-sm">
              Privacy
            </a>
          </Button>
          <Button variant="accent" size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
