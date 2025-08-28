import React from "react";
import { embassiesClients } from "../../constants";

const EmbassiesClient = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
          Embassies & Diplomatic Missions
        </h2>
        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          Since its inception in 1962, PACKWAYS (P) Limited has grown into one
          of the most trusted and specialized relocation companies in the
          industry. With an unmatched reputation and over sixty years of proven
          expertise, we have become synonymous with reliability, efficiency, and
          premium-quality moving services.
        </p>
        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          Our success is reflected in the loyalty of our distinguished
          clientele, which includes private individuals, embassies, diplomatic
          missions- both domestic and international—who continue to place their
          trust in us time and again.
        </p>
      </div>

      <div className="max-w-5xl mx-auto border border-gray-300">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {embassiesClients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center justify-center h-40 w-full p-4 bg-white hover:bg-gray-50 transition border border-gray-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain mb-2"
              />
              <p className="text-sm text-center font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmbassiesClient;
