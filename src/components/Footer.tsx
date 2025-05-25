const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QR Menü Pro</h3>
            <p>Restoranınız için modern dijital çözümler</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-300 transition">
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="/fiyatlandirma"
                  className="hover:text-blue-300 transition"
                >
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-blue-300 transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <p>info@qrmenupro.com</p>
            <p>+90 555 123 45 67</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} QR Menü Pro. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
