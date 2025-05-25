interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="holographic-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "📱",
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görüntüleme deneyimi",
    },
    {
      icon: "🔄",
      title: "Anında Güncelleme",
      description: "Menünüzü anında güncelleyebilirsiniz",
    },
    {
      icon: "📊",
      title: "Detaylı Analizler",
      description: "Müşteri davranışlarını analiz edin",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Neden QR Menü Pro?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
