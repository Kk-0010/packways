import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import ContactBanner from "../../assets/contact2.jpg";
import { FOOTER_CONTACTS } from "../../constants";
import { Link } from "react-router-dom";
import { Contact as ContactComp } from "../../components";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={ContactBanner}
          alt="Our Network"
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>

        {/* Head Office (First Location) */}
        <div className="">
          <h1 className="text-lg font-bold text-gray-800 mb-2">
            One number, one call. That's all it takes to get your reloca on
            process underway.
          </h1>
          <p className="text-justify text-gray-700 leading-relaxed mb-4">
            All transferees are managed and monitored from a single coordina on
            center- Our Delhi Office. This centralized approach gives our
            customers one point of contact and allows our reloca on consultants
            to oversee all aspects of the reloca on process.{" "}
          </p>
        </div>
        <div></div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            PACKWAYS PRIVATE LTD., NEW DELHI
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <Link
                to={`mailto:${FOOTER_CONTACTS.email}`}
                className="hover:text-blue-600"
              >
                {FOOTER_CONTACTS.email}
              </Link>
            </li>
            <li className="flex flex-wrap gap-2">
              {/* Telephone Numbers */}
              {FOOTER_CONTACTS.phones.map((tel, index) => (
                <div key={`tel-${index}`} className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0" /> {/* Landline Icon */}
                  <Link to={`tel:${tel}`} className="hover:text-blue-600">
                    {tel}
                  </Link>
                </div>
              ))}

              {/* Mobile Numbers */}
              {FOOTER_CONTACTS.mobiles.map((mobile, index) => (
                <div
                  key={`mobile-${index}`}
                  className="flex items-center gap-2"
                >
                  <Smartphone size={16} className="shrink-0" />{" "}
                  {/* Mobile Icon */}
                  <Link to={`tel:${mobile}`} className="hover:text-blue-600">
                    {mobile}
                  </Link>
                </div>
              ))}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0" />
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  FOOTER_CONTACTS.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {FOOTER_CONTACTS.address}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ContactComp />
    </section>
  );
};

export default Contact;
