import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPeople } from "@/data/people";

const Home = () => {
  const people = getAllPeople();

  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
    document.title = "Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container py-24 md:py-32">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Profiles</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl">
          Select a portfolio. Each profile uses a region-specific theme.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/${p.slug}`}
                className="block rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/35 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                <p className="font-semibold text-lg text-foreground">{p.displayName}</p>
                <p className="text-sm text-muted-foreground mt-1">{p.regionLabel}</p>
                <p className="text-xs font-mono text-primary/80 mt-3">/{p.slug}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
