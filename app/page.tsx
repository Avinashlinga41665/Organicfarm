import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/farm-hero.jpg"
        alt="Organic Farm"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl rounded-lg bg-black/55 p-10 backdrop-blur-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">
            It's All Organic & Natural Here
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Organic Products
            <br />
            for a Better World
          </h1>

          <p className="mb-8 text-lg text-gray-200">
            We grow, harvest and deliver the freshest organic produce
            for a healthy life and a better tomorrow.
          </p>

          <div className="flex gap-4">
            <button className="rounded-md bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700">
              Learn More
            </button>

            <button className="rounded-md border border-white px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}