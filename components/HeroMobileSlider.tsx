"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "/farm-banner.jpg",
    title: "Fresh Organic Produce",
    subtitle: "Farm to Table • Pure & Natural",
    button: "Shop Now",
    href: "/products",
  },
  {
    image: "/organic-banner.jpg",
    title: "Fresh Harvest Daily",
    subtitle: "Picked Fresh Every Morning",
    button: "Explore",
    href: "/aboutus",
  },
  {
    image: "/fresh-banner.jpg",
    title: "100% Chemical Free",
    subtitle: "Healthy Food For Your Family",
    button: "Learn More",
    href: "/farming-process",
  },
];

export default function MobileHeroSlider() {
  
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );
  const router = useRouter();

  return (
    <div className="md:hidden">
      <div
        className="overflow-hidden rounded-2xl"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-60"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
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

                <button onClick={() => router.push(slide.href)} className="mt-5 bg-green-600 text-white px-5 py-3 rounded-lg w-fit">
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