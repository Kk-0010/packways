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
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]} // faster speed
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent className="flex gap-2 px-4">
            {testimonials.map(({ id, name, role, feedback, avatar }) => (
              <CarouselItem
                key={id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-72 flex flex-col justify-center">
                  <CardHeader className="flex flex-col items-center justify-center space-y-2">
                    <Avatar className="h-18 w-18 sm:h-20 sm:w-20 bg-transparent flex justify-center rounded-none">
                      <AvatarImage src={avatar} alt={name} />
                      <AvatarFallback className="text-blue-600 font-semibold bg-blue-50 w-full h-full flex items-center justify-center text-base sm:text-lg">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <p className="text-base sm:text-base mb-0 -mt-2 text-gray-800 font-semibold text-center break-words max-w-[95%] mx-auto">
                      {role}
                    </p>

                    <CardTitle className="text-sm sm:text-sm text-gray-500 text-center max-w-[95%] mx-auto pt-4 ">
                      {name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow custom">
                    <p className="text-gray-900 leading-relaxed text-sm my-0">
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
