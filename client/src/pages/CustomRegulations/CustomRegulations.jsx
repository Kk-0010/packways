import React from "react";
import CustomImg from "../../assets/custom-banner1.jpg";

export default function CustomRegulations() {
  return (
    <section className="w-full min-h-screen bg-blue-50 pt-24 pb-16 px-6">
      <div className=" max-w-5xl mx-auto bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-6">
        <div className="w-full h-64 mb-6">
          <img
            src={CustomImg}
            alt="Customs Regulations"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b pb-4">
          Custom Regulations
        </h1>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Personnel On Assignment To Diplomatic Missions
          </h2>
          <p className="text-gray-700 leading-relaxed custom">
            Import of household goods and motor vehicle are permitted free of
            duty on presentation of customs duty exemption certificate issued by
            the concerned diplomatic mission and countersigned by the Govt. of
            India. The diplomatic personnel should contact their mission for
            issuance of customs duty exemption.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8 ">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Transfer Of Residence Benefits
          </h2>
          <p className="text-gray-700 mb-4 custom">
            Foreign or Indian Nationals, including Non Resident Indian
            transferring residence to India are allowed to import their
            household effects subject to the following conditions:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2 custom">
            <li>
              The owner has resided abroad for at least 365 days during the 2
              years immediately preceding the date of his arrival in India.
            </li>
            <li>
              Total stay in India on short visits during the 2 preceding years
              does not exceed 6 months (or 180 days).
            </li>
            <li>
              The owner has not availed this concession in the preceding 3
              years.
            </li>
          </ul>
          <p className="text-gray-700 mb-6 custom">
            (Foreign nationals are treated at par with Indian nationals except
            that certain customs station insist on production of minimum one
            year residence visa as a precondition to granting transfer of
            residence benefits).
          </p>
          <p className="text-gray-700 mb-6 custom">
            Please note that only one member per family is entitled to transfer
            of residence benefits.
          </p>
          <p className="text-gray-700 mb-6 custom">
            OLD & USED personal and household effects required for satisfying
            daily necessities of life including furniture, bedding, kitchenware,
            glassware, etc. (excluding electrical & electronic items) are
            exempted from duty. As per new rules, the following electronics
            items [Annexure-1] are also exempted from duty:
          </p>
          <div className="bg-blue-50 p-4 rounded-md mb-6 custom">
            <p className="text-gray-700 custom">
              VCR / VCP / VTR, Washing Machine, Electrical or Liquefied
              Petroleum Gas Cooking Range, Personal Computer, Laptop Computer,
              Domestic refrigerator of capacity up to 300 liters or equivalent.
            </p>
          </div>
          <p className="text-gray-700 mb-6 custom">
            Only one unit of each of the following items [new or old] is
            permitted under concessional duty rate of 15% of value-subject to
            aggregate value of these items [Annexure II] not exceeding Rs. 5
            lakhs/-
          </p>
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="text-gray-700 sm:custom">
              Airconditioner, Deep Freezer, Microwave, Fax Machine, Dishwasher,
              Colour Television, Digital Video Disc Player, Video Home Theatre
              System, Video Camera, Portable photocopying machine, Music System,
              Word Processor.
            </p>
          </div>
          <p className="text-gray-700 ">
            Any repeated item of list [Annexure II] is dutiable @ normal
            rate-40%.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Time Limit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 custom">
            Unaccompanied baggage must be dispatched by air within 15 days and
            by sea within 30 days of owner’s arrival in India. The delay may be
            condoned on merits-maximum extendable up to 60 days by air and 90
            days by sea.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 custom">
            Shortfall up to 2 months in completing 2 years stay abroad may be
            condoned by Asstt. Commissioner of Customs for early return on
            satisfactory grounds. Beyond a period of 2 months, no condonation
            would be granted.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 custom">
            If the total stay in India on short visits during the preceding 2
            years exceeds the time limit of 6 months, then condonation may be
            granted by the Commissioner of Customs in deserving cases.
          </p>
          <p className="text-gray-700 leading-relaxed custom">
            The unaccompanied baggage may land in India up to 2 months before
            the arrival of the passenger or within such period, not exceeding
            one year, as the Asstt. Commissioner of Customs may allow, if
            satisfied with the reason.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8 custom">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Prohibited
          </h2>
          <p className="text-gray-700 mb-3">
            Alcoholic Beverages, Firearms & Ammunition, Commercial Goods or
            Goods in Commercial Quantity, Narcotics, Drugs.
          </p>
          <p className="text-gray-700">
            Import duties on alcohol and spirits are extremely high in India.
            Please contact us prior to shipping for necessary information.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 p-5 rounded-md border border-yellow-200">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
            Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed custom">
            The customs information has been prepared to the best of our
            knowledge and experience. Customs rules and duties are subject to
            change without prior notice. We shall not be responsible for sole
            reliance on this work nor for any error or omission.
          </p>
        </div>
      </div>
    </section>
  );
}
