import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

import { testimonials } from "../../constants";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        <Carousel
          plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]} // faster speed
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="flex gap-4 px-4">
            {testimonials.map(({ id, name, role, feedback, avatar }) => (
              <CarouselItem
                key={id}
                className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-72 flex flex-col">
                  <CardHeader className="flex items-center space-x-3 sm:space-x-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent flex justify-center -mt-1">
                      <AvatarImage src={avatar} alt={name} />
                      <AvatarFallback className="text-blue-600 font-semibold bg-blue-50 rounded-full w-full h-full flex items-center justify-center text-sm sm:text-base">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm sm:text-base md:text-lg mb-1">
                        {name}
                      </CardTitle>
                      <div className="hidden md:flex">
                        <p className="text-xs sm:text-sm text-gray-500 -mt-1 mb-0">
                          {role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <div className="block md:hidden">
                    <p className="text-xs sm:text-sm text-gray-500 -mt-1 mb-0 pl-7">
                      {role}
                    </p>
                  </div>

                  <CardContent className="flex-grow custom">
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base my-0">
                      “{feedback}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
