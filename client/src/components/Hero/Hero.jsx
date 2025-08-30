import BlueTruck from "../../assets/truck02.png";
import { corporateClients } from "../../constants";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-100vh max-w-[1536px] mx-auto">
      <section className="h-70% lg:h-[700px] mt-24 max-w-7xl px-3 sm:px-5 md:px-7 lg:mx-auto">
        <div className="bg-gray-50 rounded-4xl p-8 sm:py-10 sm:px-16">
          {/* Heading */}
          <div className="flex justify-center text-center">
            <h1 className="max-w-sm md:max-w-xl lg:max-w-3xl text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black leading-tight font-figtree">
              <span className="text-primary">DISCOVER</span> WITH OUR INTEGRATED{" "}
              <span className="text-primary">LOGISTICS</span>
            </h1>
          </div>
          {/* Image and Subtitle */}
          <img
            src={BlueTruck}
            alt="Logistics Truck"
            className="h-70 sm:h-90 xl:h-110 absolute left-0 object-cover"
          />
          <div className="flex lg:my-32 mt-80 md:mt-100">
            <div className="lg:w-2/7 2xl:mr-16 lg:mr-36" />
            <div>
              <p className="text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold leading-tight text-gray-800">
                From local deliveries to global shipments, we’ve mastered every
                mile.
              </p>
              <p className="text-sm md:text-lg lg:text-lg xl:text-xl mt-2 text-gray-600 font-medium leading-tight">
                Blending decades of expertise with modern technology for
                seamless logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col max-w-7xl mx-auto py-12 gap-2 lg:gap-4 antialiased items-center justify-center relative overflow-hidden">
        <h2 className="text-xl lg:text-3xl font-extrabold text-blue-900 tracking-tight text-center mb-2">
          Trusted by Leading Corporates
        </h2>
        <InfiniteMovingCards
          items={corporateClients}
          direction="right"
          speed="slow"
          pauseOnHover
          className="w-full max-w-6xl px-4 sm:px-6 lg:px-8"
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
    </div>
  );
}
