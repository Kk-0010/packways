import { Link } from "react-router-dom";
import { NETWORK_LOCATIONS, ICONS } from "../../constants";
import NetworkBanner from "../../assets/our-network.jpg";
import { IndiaMap, WorldMap } from "@/components";

export default function OurNetwork() {
  const { Phone, Smartphone, Mail, Globe, MapPin } = ICONS;

  const Address = ({ address }) => (
    <p className="flex items-start gap-2 mt-2">
      <MapPin size={16} className="mt-1" />
      <Link
        to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-blue-800"
      >
        {address}
      </Link>
    </p>
  );

  const PhoneNumbers = ({ numbers }) => (
    <div className="flex items-start gap-2 mt-1">
      <Phone size={16} className="mt-1" />
      <div className="flex flex-col">
        {numbers.split(",").map((num, i) => (
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
  );

  const MobileNumbers = ({ numbers }) => (
    <div className="flex items-start gap-2 mt-1">
      <Smartphone size={16} className="mt-1" />
      <div className="flex flex-col">
        {numbers.split(",").map((num, i) => (
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
  );

  const Email = ({ email }) => (
    <p className="flex items-center gap-2 mt-1">
      <Mail size={16} />
      <Link
        to={`mailto:${email}`}
        className="text-gray-800 hover:text-blue-800"
      >
        {email}
      </Link>
    </p>
  );

  const Website = ({ website }) =>
    website && (
      <p className="flex items-center gap-2 mt-1">
        <Globe size={16} />
        <Link
          to={`https://${website}`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-blue-800"
        >
          {website}
        </Link>
      </p>
    );

  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={NetworkBanner}
          alt="Our Network"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Our Network</h1>
          {/* India Network Map */}
          <div className="max-w-5xl mx-auto text-center">
            <p>
              With a strong PAN India presence and an extensive reach in 50+
              international destinations. Our wide network ensures reliable,
              efficient, and timely movement of goods across domestic and global
              supply chains.
            </p>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Our Presence Across India
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our offices and partners spread across major cities in
              India.
            </p>
            <IndiaMap />
          </div>

          {/* Global Network Map */}
          <div className="mt-16 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Our Global Reach
            </h2>
            <p className="text-gray-600 mb-6">
              We are connected worldwide through trusted partners and
              associates.
            </p>
            <WorldMap />
          </div>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NETWORK_LOCATIONS.map((location, index) => (
            <div
              key={index}
              className={`border-b border-gray-300 pb-6 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <h2 className="text-lg font-bold text-gray-800">
                {location.city}
              </h2>
              <p className="text-blue-800 font-semibold">{location.company}</p>
              <Address address={location.address} />
              {location.city !== "MUMBAI" && (
                <PhoneNumbers numbers={location.tel} />
              )}
              <MobileNumbers numbers={location.mobile} />
              <Email email={location.email} />
              <Website website={location.website} />
              {location.note && (
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Note :</strong> {location.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
