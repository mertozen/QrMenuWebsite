import { FaQrcode, FaEdit, FaChartLine } from "react-icons/fa";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
  <div className="holographic-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaQrcode />,
      title: "QR Kod Oluştur",
      description: "Restoranınız için özel QR kodunuzu anında oluşturun",
    },
    {
      icon: <FaEdit />,
      title: "Menünüzü Düzenleyin",
      description: "Kolay arayüzle menünüzü istediğiniz gibi özelleştirin",
    },
    {
      icon: <FaChartLine />,
      title: "Analizleri Görün",
      description: "Müşteri etkileşimlerini ve menü performansını takip edin",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nasıl Çalışır?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-xl">
          Sadece 3 adımda restoranınıza özel dijital menünüz hazır
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
