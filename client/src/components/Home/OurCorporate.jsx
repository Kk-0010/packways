import React from "react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { embassiesClients } from "../../constants";

const OurCorporate = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto py-8 gap-2 lg:gap-4 antialiased items-center justify-center relative overflow-hidden">
      <h2 className="text-xl lg:text-3xl font-extrabold text-blue-900 tracking-tight text-center mb-0">
        Trusted by Diplomats
      </h2>
      <InfiniteMovingCards
        items={embassiesClients}
        direction="right"
        speed="slow"
        pauseOnHover
        className="w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        showNames={true}
      />
      <div className="w-full flex justify-end pr-6 mt-0">
        <Link
          to="our-clientele/embassies-client"
          className="text-blue-600 hover:text-blue-800 text-sm font-semibold underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default OurCorporate;
