import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import AccessibilityWidget from "../components/accessibility/AccessibilityWidget";

// Pre-paint script: read the same localStorage key the hook uses and set
// data attributes on <html> before first paint, so persisted a11y settings
// don't visibly flash off on reload.
const A11Y_PREPAINT = `(function(){try{var s=localStorage.getItem('alexac-a11y-v1');if(!s)return;var o=JSON.parse(s);if(!o||o.v!==1)return;var r=document.documentElement,m={fontScale:'a11yFontScale',letterSpacing:'a11yLetterSpacing',lineSpacing:'a11yLineSpacing',textAlign:'a11yTextAlign',saturation:'a11ySaturation'},b={dyslexiaFont:'a11yDyslexia',highContrast:'a11yContrast',invert:'a11yInvert',greyscale:'a11yGreyscale',largeCursor:'a11yLargeCursor',highlightLinks:'a11yHighlightLinks',pauseAnimations:'a11yPauseAnimations',readingGuide:'a11yReadingGuide'};for(var k in m)if(o[k]!=null)r.dataset[m[k]]=String(o[k]);for(var k2 in b)r.dataset[b[k2]]=(k2==='highContrast')?(o[k2]?'high':'off'):(o[k2]?'on':'off');}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Alexa C. — Senior Designer & App Developer" },
      { name: "description", content: "Production-ready apps and landing pages for early-stage startups — shipped in 5–10 days by an ex-Amazon senior designer." },
      { name: "author", content: "Alexa C." },
      { property: "og:title", content: "Alexa C. — Apps & landing pages in 5–10 days" },
      { property: "og:description", content: "Production-ready apps and landing pages for early-stage startups — shipped in 5–10 days by an ex-Amazon senior designer." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Alexa C." },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Alexa C. — Apps & landing pages in 5–10 days" },
      { name: "twitter:description", content: "Production-ready apps and landing pages for early-stage startups — shipped in 5–10 days by an ex-Amazon senior designer." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a01392c4-e71c-4fe6-98ef-64761a2cf893/id-preview-c6d76f9a--26c8afc1-fbdd-4f09-a7fb-3b2eafa1c15f.lovable.app-1781973249255.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a01392c4-e71c-4fe6-98ef-64761a2cf893/id-preview-c6d76f9a--26c8afc1-fbdd-4f09-a7fb-3b2eafa1c15f.lovable.app-1781973249255.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap",
      },
    ],
    scripts: [{ children: A11Y_PREPAINT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* #a11y-scope wraps the entire app tree so widget filters
          (invert/greyscale/contrast) can be scoped to page content
          without filtering the widget itself, which portals to body. */}
      <div id="a11y-scope">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </div>
      <AccessibilityWidget />
    </QueryClientProvider>
  );
}
