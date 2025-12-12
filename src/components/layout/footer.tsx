import KivoLogo from "../kivo-logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex flex-col items-center justify-center gap-2">
        <KivoLogo className="h-6 w-auto" />
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Kivo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
