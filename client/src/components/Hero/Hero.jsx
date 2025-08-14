import BlueTruck from "../../assets/blue-truck.png";

export default function Hero() {
  return (
    <div className="relative h-100vh max-w-[1536px] mx-auto">
      <section className="h-screen mt-20 sm:mt-24 max-w-7xl px-3 sm:px-5 md:px-7 lg:mx-auto">
        <div className="bg-blue-100 rounded-4xl p-8 sm:py-10 sm:px-16">
          {/* Heading */}
          <h1 className="xl:max-w-5xl text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black leading-tight font-figtree">
            CELEBRATING OVER <span className="text-primary">60 YEARS</span> OF{" "}
            PRECISION IN <span className="text-primary">LOGISTICS</span>
          </h1>
          {/* Image and Subtitle */}
          <img
            src={BlueTruck}
            alt="Logistics Truck"
            className="h-70 sm:h-90 xl:h-110 absolute left-0 object-cover"
          />
          <div className="flex lg:my-32 mt-80 md:mt-100">
            <div className="lg:w-2/7 2xl:mr-16 lg:mr-36" />
            <div>
              <p className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold leading-tight text-gray-800">
                From local deliveries to global shipments, we’ve mastered every
                mile.
              </p>
              <p className="text-lg md:text-xl lg:text-lg xl:text-xl mt-2 text-gray-600 font-medium leading-tight">
                Blending decades of expertise with modern technology for
                seamless logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
