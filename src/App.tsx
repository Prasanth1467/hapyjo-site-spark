import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getPageIdFromPathname } from "@/lib/static-routes";
import { getStaticPage } from "@/pages/static/StaticPages";

const App = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const pageId = getPageIdFromPathname(pathname);
  return (
    <TooltipProvider>
      <Toaster />
      {getStaticPage(pageId)}
    </TooltipProvider>
  );
};

export default App;
