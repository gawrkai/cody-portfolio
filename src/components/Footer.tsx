const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container text-center">
      <p className="text-sm text-muted-foreground">
        Built with care · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
