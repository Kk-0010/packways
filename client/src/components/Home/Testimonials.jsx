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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>

 {/* TODO - FIX the Flick issue */}

        {/* Infinite Scrolling Row */}
        <div className="group overflow-hidden relative w-full py-4">
          <div className="flex gap-6 animate-scroll">
            {/* All 31 cards once */}
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0"
              >
                <CardHeader className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{t.name}</CardTitle>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">“{t.feedback}”</p>
                </CardContent>
              </Card>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
