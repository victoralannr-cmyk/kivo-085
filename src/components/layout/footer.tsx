import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex flex-col items-center justify-center gap-2">
        <Image 
          src="https://i.postimg.cc/QxKrKJ9z/Captura-de-tela-2025-11-30-224857-removebg-preview.png" 
          alt="Kivo Logo"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Kivo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
