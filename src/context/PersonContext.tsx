import { createContext, useContext, type ReactNode } from "react";
import type { Person } from "@/types/person";

const PersonContext = createContext<Person | null>(null);

export function PersonProvider({ person, children }: { person: Person; children: ReactNode }) {
  return <PersonContext.Provider value={person}>{children}</PersonContext.Provider>;
}

export function usePerson(): Person {
  const ctx = useContext(PersonContext);
  if (!ctx) {
    throw new Error("usePerson must be used within PersonProvider");
  }
  return ctx;
}
