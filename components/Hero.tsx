import Image from "next/image";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-20">
 {/* ================= DESKTOP HERO ================= */}
<div className="hidden md:block">
  {/* Hero */}
  <div className="relative h-[80vh]">
    <Image
      src="/farm-banner.jpg"
      alt="Organic Farm"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="relative z-10 flex items-center h-[80vh]">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl bg-black/40 backdrop-blur-md rounded-2xl p-10">
          <p className="text-green-400 font-semibold text-lg">
            🌱 It's All Organic & Natural Here
          </p>

          <h1 className="text-6xl font-bold text-white mt-4 leading-tight">
            Organic Products
            <br />
            For a Better World
          </h1>

          <p className="text-white/90 text-lg mt-6">
            We grow and deliver fresh organic produce directly
            from our farm using sustainable and eco-friendly
            farming practices.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition">
              Learn More
            </button>

            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* PROMO CARDS */}
  <div className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="relative h-80 rounded-2xl overflow-hidden group">
          <Image
            src="/farm-banner.jpg"
            alt="Organic Farming"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-3xl font-bold">
              Organic Farming
            </h3>

            <button className="mt-3 bg-white text-black px-4 py-2 rounded-lg">
              Explore
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-80 rounded-2xl overflow-hidden group">
          <Image
            src="/farm-banner.jpg"
            alt="Fresh Harvest"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-3xl font-bold">
              Fresh Harvest
            </h3>

            <button className="mt-3 bg-white text-black px-4 py-2 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-80 rounded-2xl overflow-hidden group">
          <Image
            src="/farm-banner.jpg"
            alt="Chemical Free"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute bottom-6 left-6">
            <h3 className="text-white text-3xl font-bold">
              Chemical Free
            </h3>

            <button className="mt-3 bg-white text-black px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

      {/* ================= MOBILE HERO ================= */}
      <div className="md:hidden bg-gray-50">

        {/* Search Bar */}
        <div className="px-4 pt-4">
          <div className="bg-white rounded-xl border flex items-center px-4 py-3 shadow-sm">
            <Search size={20} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-3 flex-1 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Main Banner */}
        <div className="p-4">
          <div className="relative h-[220px] rounded-2xl overflow-hidden">
            <Image
              src="/farm-banner.jpg"
              alt="Fresh Organic Produce"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-white">
                Fresh Organic
                <br />
                Produce
              </h2>

              <p className="text-white/90 mt-2">
                Farm to Table • Pure & Natural
              </p>

              <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg w-fit">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Promo Banners */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-2 gap-3">

            {/* Banner 1 */}
            <div className="relative h-36 rounded-xl overflow-hidden">
              <Image
                src="/farm-banner.jpg"
                alt="Organic Farming"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="text-white font-semibold">
                  Organic Farming
                </h3>

                <button className="text-xs bg-white text-black px-3 py-1 rounded mt-2 w-fit">
                  Explore
                </button>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative h-36 rounded-xl overflow-hidden">
              <Image
                src="/farm-banner.jpg"
                alt="Fresh Harvest"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="text-white font-semibold">
                  Fresh Harvest
                </h3>

                <button className="text-xs bg-white text-black px-3 py-1 rounded mt-2 w-fit">
                  Shop
                </button>
              </div>
            </div>

            {/* Banner 3 Full Width */}
            <div className="relative h-36 rounded-xl overflow-hidden col-span-2">
              <Image
                src="/farm-banner.jpg"
                alt="Chemical Free"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-white font-semibold text-lg">
                  100% Chemical Free
                </h3>

                <button className="text-xs bg-white text-black px-3 py-1 rounded mt-2 w-fit">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}