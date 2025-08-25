// src/pages/OurNetwork/OurNetwork.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NETWORK_LOCATIONS } from "../../constants";
import NetworkBanner from "../../assets/our-network.jpg";

export default function OurNetwork() {
  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <img 
          src={NetworkBanner} 
          alt="Our Network" 
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Network</h1>

        {/* Delhi - Full Width */}
        <div className="border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800">{NETWORK_LOCATIONS[0].city}</h2>
          <p className="text-blue-800 font-semibold">{NETWORK_LOCATIONS[0].company}</p>
          <p className="mt-2"><strong>Address :</strong> {NETWORK_LOCATIONS[0].address}</p>
          <p><strong>Tel. :</strong> {NETWORK_LOCATIONS[0].tel}</p>
          <p><strong>Mobile :</strong> {NETWORK_LOCATIONS[0].mobile}</p>
          <p><strong>E-mail :</strong> 
            <Link to={`mailto:${NETWORK_LOCATIONS[0].email}`} className="text-blue-600">
              {NETWORK_LOCATIONS[0].email}
            </Link>
          </p>
          {NETWORK_LOCATIONS[0].website && (
            <p><strong>Website :</strong> 
              <Link to={`https://${NETWORK_LOCATIONS[0].website}`} target="_blank" rel="noreferrer" className="text-blue-600">
                {NETWORK_LOCATIONS[0].website}
              </Link>
            </p>
          )}
          {NETWORK_LOCATIONS[0].note && (
            <p className="mt-2 text-sm text-gray-600"><strong>Note :</strong> {NETWORK_LOCATIONS[0].note}</p>
          )}
        </div>

        {/* Mumbai & Chennai - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NETWORK_LOCATIONS.slice(1).map((location, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              <h2 className="text-lg font-bold text-gray-800">{location.city}</h2>
              <p className="text-blue-800 font-semibold">{location.company}</p>
              <p className="mt-2"><strong>Address :</strong> {location.address}</p>
              <p><strong>Tel. :</strong> {location.tel}</p>
              <p><strong>Mobile :</strong> {location.mobile}</p>
              <p><strong>E-mail :</strong> 
                <Link to={`mailto:${location.email}`} className="text-blue-600">
                  {location.email}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
