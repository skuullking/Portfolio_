
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-left">📍 Pontoise, France</p>
          <p className="text-left">🗣️ Français (natif), Anglais (B2)</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-left">📞 0698514119</p>
          <p className="text-left">📧 slimaniyanis143@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
