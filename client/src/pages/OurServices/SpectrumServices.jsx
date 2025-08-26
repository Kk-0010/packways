import { spectrumServicesData } from "../../constants";
import SPECTRUMSERVICES from "../../assets/services/spectrum-services.jpg";

const SpectrumServices = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
      <div className=" mb-8">
        <img
          src={SPECTRUMSERVICES}
          alt="SPECTRUM SERVICES"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">Spectrum of Services</h1>

      {spectrumServicesData.map((service, index) => (
        <div
          key={index}
          className={`mb-${
            index !== spectrumServicesData.length - 1 ? "4 border-b pb-4" : "2"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            {service.title}
          </h2>
          <p className="custom">{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default SpectrumServices;
