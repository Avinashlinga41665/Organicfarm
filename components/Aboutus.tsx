import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold">
            About Our Farm
          </h2>

          <p className="mt-6 text-gray-600">
            We are a family-owned organic farm
            dedicated to sustainable farming and
            healthy food production.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded">
            Read More
          </button>
        </div>

        <Image
          src="/images/family-farm.jpg"
          alt="Farm Family"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}