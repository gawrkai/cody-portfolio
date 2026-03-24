import { usePerson } from "@/context/PersonContext";

const Footer = () => {
  const person = usePerson();

  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          {person.displayName} · Built with care · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
