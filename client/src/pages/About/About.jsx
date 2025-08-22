import React from "react";
import ISOLogo from "../../assets/aboutUs/iso-logo.jpg";
import IAMLogo from "../../assets/aboutUs/iam-logo.png";
import ARA from "../../assets/aboutUs/ara-logo.png";
import ABOUTUS from "../../assets/aboutUs/aboutUs-img3.jpg";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto  min-h-screen bg-white pt-24 pb-16 px-6">
      <div className=" mb-8">
        <img
          src={ABOUTUS}
          alt="ABOUT US"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
          About Us
        </h1>

        {/* Paragraphs */}
        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          <strong>Packways Ace Relocations</strong>, the International Division
          of <strong>Packways Pvt. Ltd.</strong> is a well acknowledged removals
          specialist of India.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          Since the Company's early inception brought about by{" "}
          <strong>Mr.Shyam Sawhney, our managing director in 1962</strong>, its
          humble, yet, pioneer entry in the removals industry,{" "}
          <strong>Packways Ace Relocations</strong> has clearly established
          itself as a leading international relocation Company offering the
          finest, customized professional move management services, backed by a
          wealth of experience and an unparalleled reputation, spanning over 63
          years.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          Headquartered in <strong>New Delhi</strong>,{" "}
          <strong>Packways Ace Relocations</strong> operates a fully
          comprehensive removal service of any magnitude to any destination
          across the globe. Its nationwide presence is facilitated through its
          own network of offices in the major business cities of{" "}
          <strong>Mumbai, Bangalore & Chennai</strong>. For over 4 decades{" "}
          <strong>Packways Ace Relocations</strong> has specialized in providing
          fully integrated solutions to companies and their international
          consignees. Our extensive network of agents allows us to manage every
          aspect of an employee's relocation, all through a single point of
          contact.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed mb-4">
          Although relocation, whether domestic or international is a milestone
          event in life & can be intimidating to organisations and their
          transferees, <strong>Packways Ace Relocations</strong> understands
          that the first step to a successful international move is having a
          well thought-out plan. This we know having had decades of wide
          experience & the help of a strong global network, apart from the facts
          of our specialized knowledge, infrastructure & expertise. Our clients
          are thus, helped to relocate effortlessly in a seamless & systematic
          way. Our workforce who are dedicated to excellence, meet the most
          exceptional challenges & demands with care & patience. For us,
          customer satisfaction is paramount, nothing is trivial or
          insignificant when it comes to our clients move. We deliver what is
          promised without exception.
        </p>

        {/* Certification */}
        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          An ISO 9001 : 2008 Certified Company.
        </h2>

        {/* Logos */}
        <div className="flex gap-6 mt-6 flex-wrap">
          <img src={ISOLogo} alt="ISO Logo" className="h-24 object-contain" />
          <img src={IAMLogo} alt="IAM Logo" className="h-24 object-contain" />
          <img src={ARA} alt="ARA Logo" className="h-24 object-contain" />
        </div>
      </div>
    </section>
  );
}
