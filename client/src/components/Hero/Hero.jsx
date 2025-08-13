export default function Hero() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            DISCOVER WITH OUR <br /> INTEGRATED{" "}
            <span className="text-primary">LOGISTICS</span>
          </h1>
          <p className="mt-4 text-lg">We Deliver, Track and Shipping</p>
        </div>
        <div className="lg:w-1/2">
          <img src="/truck.png" alt="Logistics Truck" className="w-full" />
        </div>
      </div>
    </section>
  );
}
