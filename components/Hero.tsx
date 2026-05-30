import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/farm-banner.jpg"
        alt="Farm"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl ml-24 bg-black/50 p-10 rounded-lg">
          <p className="text-green-400 font-semibold">
            It's All Organic & Natural Here
          </p>

          <h1 className="text-6xl font-bold text-white mt-4">
            Organic Products
            <br />
            For a Better World
          </h1>

          <p className="text-white mt-4">
            We grow and deliver fresh organic produce directly
            from our farm.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded">
              Learn More
            </button>

            <button className="border border-white text-white px-6 py-3 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}