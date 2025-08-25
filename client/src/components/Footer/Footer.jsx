import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PackwaysLogo from "../../assets/logo/logo2.png";

import {
  FOOTER_NAV_LINKS,
  FOOTER_CONTACTS,
  FOOTER_CERTIFICATIONS,
} from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-gray-light text-gray-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <img
            src={PackwaysLogo}
            alt="Packways Logo"
            className="h-14 w-auto mb-4"
          />
          <p className="text-gray-600 text-sm">
            Reliable logistics & relocation services ensuring safe, fast, and
            efficient delivery across the globe.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700">
            {FOOTER_NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-blue-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <Link
                to={`mailto:${FOOTER_CONTACTS.email}`}
                className="hover:text-blue-600"
              >
                {FOOTER_CONTACTS.email}
              </Link>
            </li>
            <li className="flex flex-wrap gap-4">
              {FOOTER_CONTACTS.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Phone size={16} />
                  <Link to={`tel:${phone}`} className="hover:text-blue-600">
                    {phone}
                  </Link>
                </div>
              ))}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
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

      {/* Certification Logos */}
      <div className="flex justify-center gap-4 lg:gap-6 mt-10">
        {FOOTER_CERTIFICATIONS.map((cert, index) => (
          <Card key={index} className="bg-white p-2 rounded-lg shadow-md">
            <CardContent>
              <img src={cert.src} alt={cert.alt} className="h-10 w-auto" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Packways. All rights reserved. |{" "}
        <Link to="/privacy" className="hover:text-blue-600">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link to="/terms" className="hover:text-blue-600">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
