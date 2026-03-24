import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getAllPeople } from "@/data/people";
import PersonPortfolio from "./pages/PersonPortfolio.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const RootRedirect = () => {
  const slug = getAllPeople()[0]?.slug;
  if (!slug) return <NotFound />;
  return <Navigate to={`/${slug}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:slug" element={<PersonPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
