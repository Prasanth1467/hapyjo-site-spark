const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Rentals", href: "#rentals" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-2xl font-bold text-primary-foreground">HAPYJO</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">
              Site &amp; Fleet Control
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="gold-underline text-sm text-primary-foreground/60 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 h-px bg-primary-foreground/10" />

        <div className="mt-8 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <div className="text-xs text-primary-foreground/40 space-y-1">
            <p>Corporate Support: contact@hapyjo.com</p>
            <p>+91 90000 00000</p>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} HapyJo Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
