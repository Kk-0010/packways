import { alliedServicesData } from "../../constants";
import ALLIEDSERVICES from "../../assets/services/allied-services.jpg";

const AlliedServices = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
      <div className=" mb-8">
        <img
          src={ALLIEDSERVICES}
          alt="ALLIED SERVICES"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">Allied Services</h1>
      {alliedServicesData.map((service, index) => (
        <div
          key={index}
          className={`mb-4 ${
            index !== alliedServicesData.length - 1 ? "border-b pb-4" : ""
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

export default AlliedServices;
