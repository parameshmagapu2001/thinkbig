"use client";

import React from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Peaceful escape beyond the city hustle, with uncompromised privacy.",
    description:
      "Make the most of a grand clubhouse with lounges, indoor games, reading corners, and event-ready spaces that anchor daily life",
    image: "/images/k1.svg",
  },
  {
    id: 2,
    title: "Luxury redefined with modern design and serene landscapes.",
    description:
      "Enjoy resort-style living with pools, fitness zones, gardens, and dedicated family-friendly spaces.",
    image: "/images/heroimg.svg",
  },
  {
    id: 3,
    title: "Community living with premium amenities at your doorstep.",
    description:
      "From open green spaces to work-friendly cafes and event halls, discover a lifestyle that balances work and leisure.",
    image: "/images/elysium.svg",
  },
];

const CardsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-10">
      {/* flex container with hidden scrollbars */}
      <div className="container mx-auto flex gap-6 overflow-x-auto no-scrollbar">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative min-w-[1200px] h-[520px] rounded-3xl overflow-hidden flex-shrink-0"
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Top text */}
            <div className="absolute top-6 left-6 pr-6">
              <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
                {card.title}
              </h2>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <p className="text-white text-base md:text-lg lg:text-xl max-w-[80%] leading-relaxed">
                {card.description}
              </p>

              {/* Numbering */}
              <div className="flex items-center space-x-2">
                <span className="w-12 h-12 flex items-center justify-center border border-white rounded-full text-white text-base md:text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-white/70 text-base md:text-lg">
                  / {String(cards.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* hide scrollbar with custom css */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CardsSection;
