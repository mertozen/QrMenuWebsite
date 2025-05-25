const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Restoranınız için <span className="text-grren-300">Dijital Menü</span>{" "}
          Çözümü
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          QR kodlu menünüzle hijyenik, modern ve etkileşimli bir deneyim sunun
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg transition">
            Ücretsiz Dene
          </button>
          <button className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition">
            Demo Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
