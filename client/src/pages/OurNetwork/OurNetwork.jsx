// src/pages/OurNetwork/OurNetwork.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NETWORK_LOCATIONS } from "../../constants";
import NetworkBanner from "../../assets/our-network.jpg";
import { Phone, Smartphone, Mail, Globe, MapPin } from "lucide-react"; // Added MapPin

export default function OurNetwork() {
  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top Image */}
        <img
          src={NetworkBanner}
          alt="Our Network"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Network</h1>

        {/* Delhi - Full Width */}
        <div className="border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800">
            {NETWORK_LOCATIONS[0].city}
          </h2>
          <p className="text-blue-800 font-semibold">
            {NETWORK_LOCATIONS[0].company}
          </p>

          {/* Address with MapPin icon */}
          <p className="flex items-start gap-2 mt-2">
            <MapPin size={16} className="mt-1" />
            <Link
              to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                NETWORK_LOCATIONS[0].address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-800"
            >
              {NETWORK_LOCATIONS[0].address}
            </Link>
          </p>

          {/* Tel (stacked like mobile if multiple numbers) */}
          <div className="flex items-start gap-2 mt-1">
            <Phone size={16} className="mt-1" />
            <div className="flex flex-col">
              {NETWORK_LOCATIONS[0].tel.split(",").map((num, i) => (
                <Link
                  key={i}
                  to={`tel:${num.trim()}`}
                  className="text-gray-800 hover:text-blue-800"
                >
                  {num.trim()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-start gap-2 mt-1">
            <Smartphone size={16} className="mt-1" />
            <div className="flex flex-col">
              {NETWORK_LOCATIONS[0].mobile.split("-").map((num, i) => (
                <Link
                  key={i}
                  to={`tel:${num.trim()}`}
                  className="text-gray-800 hover:text-blue-800"
                >
                  {num.trim()}
                </Link>
              ))}
            </div>
          </div>

          {/* Email */}
          <p className="flex items-center gap-2 mt-1">
            <Mail size={16} />
            <Link
              to={`mailto:${NETWORK_LOCATIONS[0].email}`}
              className="text-gray-800 hover:text-blue-800"
            >
              {NETWORK_LOCATIONS[0].email}
            </Link>
          </p>

          {/* Website */}
          {NETWORK_LOCATIONS[0].website && (
            <p className="flex items-center gap-2 mt-1">
              <Globe size={16} />
              <Link
                to={`https://${NETWORK_LOCATIONS[0].website}`}
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-blue-800"
              >
                {NETWORK_LOCATIONS[0].website}
              </Link>
            </p>
          )}

          {/* Note */}
          {NETWORK_LOCATIONS[0].note && (
            <p className="mt-2 text-sm text-gray-600">
              <strong>Note :</strong> {NETWORK_LOCATIONS[0].note}
            </p>
          )}
        </div>

        {/* Mumbai & Chennai - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NETWORK_LOCATIONS.slice(1).map((location, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              <h2 className="text-lg font-bold text-gray-800">
                {location.city}
              </h2>
              <p className="text-blue-800 font-semibold">{location.company}</p>

              {/* Address */}
              <p className="flex items-start gap-2 mt-2">
                <MapPin size={16} className="mt-1" />
                <Link
                  to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-blue-800"
                >
                  {location.address}
                </Link>
              </p>

              {/* Tel */}
              <p className="flex items-center gap-2 mt-1">
                <Phone size={16} />
                <Link
                  to={`tel:${location.tel}`}
                  className="text-gray-800 hover:text-blue-800"
                >
                  {location.tel}
                </Link>
              </p>

              {/* Mobile */}
              <div className="flex items-start gap-2 mt-1">
                <Smartphone size={16} className="mt-1" />
                <div className="flex flex-col">
                  {location.mobile.split("-").map((num, i) => (
                    <Link
                      key={i}
                      to={`tel:${num.trim()}`}
                      className="text-gray-800 hover:text-blue-800"
                    >
                      {num.trim()}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Email */}
              <p className="flex items-center gap-2 mt-1">
                <Mail size={16} />
                <Link
                  to={`mailto:${location.email}`}
                  className="text-gray-800 hover:text-blue-800"
                >
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
