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

import { testimonials } from "../../constants";

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        {/* Infinite Scrolling Row */}
        <div className="group overflow-hidden relative w-full py-4">
          <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 animate-scroll">
            {testimonials.map(({ id, name, role, feedback, avatar }) => (
              <Card
                key={id}
                className="
                  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 
                  flex-shrink-0
                  w-52 sm:w-64 md:w-80 lg:w-96 h-70 sm:h-64 md:h-80
                "
              >
                <CardHeader className="flex items-center space-x-3 sm:space-x-4">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 bg-transparent flex justify-center -mt-1">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback className="text-blue-600 font-semibold bg-blue-50 rounded-full w-full h-full flex items-center justify-center text-sm sm:text-base">
                      {name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <CardTitle className="text-sm sm:text-base md:text-lg mb-1">{name}</CardTitle>
                    <div className="hidden md:flex">
                      <p className="text-xs sm:text-sm text-gray-500 -mt-1 mb-0">{role}</p>
                    </div>
                  </div>
                </CardHeader>

                <div className="block md:hidden">
                  <p className="text-xs sm:text-sm text-gray-500 -mt-1 mb-0 pl-7">{role}</p>
                </div>
                    
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-[12px] sm:text-sm md:text-base my-0">
                    “{feedback}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
