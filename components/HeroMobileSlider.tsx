"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    image: "/farm-banner.jpg",
    title: "Fresh Organic Produce",
    subtitle: "Farm to Table • Pure & Natural",
    button: "Shop Now",
  },
  {
    image: "/banner2.jpg",
    title: "Fresh Harvest Daily",
    subtitle: "Picked Fresh Every Morning",
    button: "Explore",
  },
  {
    image: "/banner3.jpg",
    title: "100% Chemical Free",
    subtitle: "Healthy Food For Your Family",
    button: "Learn More",
  },
];

export default function MobileHeroSlider() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className="md:hidden px-4 pt-4">
      <div
        className="overflow-hidden rounded-2xl"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[240px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 flex flex-col justify-center px-6">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>

                <p className="text-white mt-3">
                  {slide.subtitle}
                </p>

                <button className="mt-5 bg-green-600 text-white px-5 py-3 rounded-lg w-fit">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}