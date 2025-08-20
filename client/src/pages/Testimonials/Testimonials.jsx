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

// Row Component (static 3 cards per row)
function TestimonialRow({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {items.map(({id, name, role, feedback, avatar}) => (
        <Card
          key={id}
          className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
        >
          <CardHeader className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 bg-transparent flex items-center justify-center">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="text-blue-600 font-semibold bg-blue-50 rounded-full w-full h-full flex items-center justify-center">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">“{feedback}”</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Repeat testimonials enough times to make 8 rows × 3 cards = 24 cards
  const repeatedTestimonials = Array.from(
    { length: 31 },
    (_, i) => testimonials[i % testimonials.length]
  );

  // Break into chunks of 3 for rows
  const rows = [];
  for (let i = 0; i < repeatedTestimonials.length; i += 3) {
    rows.push(repeatedTestimonials.slice(i, i + 3));
  }

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-12 text-gray-800">
          What Our Clients Say
        </h2>

        {/* Render 8 rows */}
        {rows.map((row, i) => (
          <TestimonialRow key={i} items={row} />
        ))}
      </div>
    </section>
  );
}
