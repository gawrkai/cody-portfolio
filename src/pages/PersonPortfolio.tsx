import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PersonProvider } from "@/context/PersonContext";
import { getPersonBySlug } from "@/data/people";
import Index from "./Index.tsx";
import NotFound from "./NotFound.tsx";

const PersonPortfolio = () => {
  const { slug } = useParams();
  const person = getPersonBySlug(slug);

  useEffect(() => {
    if (!person) return;
    document.documentElement.dataset.theme = person.theme;
    document.title = `${person.displayName} — Portfolio`;
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [person]);

  if (!person) {
    return <NotFound />;
  }

  return (
    <PersonProvider person={person}>
      <Index />
    </PersonProvider>
  );
};

export default PersonPortfolio;
