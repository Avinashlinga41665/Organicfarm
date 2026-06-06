import {
  Shovel,
  Sprout,
  Wheat,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const processSteps = [
  {
    title: "Soil Preparation",
    description:
      "We enrich the soil naturally to create the perfect foundation for healthy crops.",
    icon: Shovel,
  },
  {
    title: "Natural Cultivation",
    description:
      "Our crops are grown using sustainable and chemical-free farming methods.",
    icon: Sprout,
  },
  {
    title: "Harvesting",
    description:
      "Produce is carefully harvested at the right time to ensure freshness.",
    icon: Wheat,
  },
  {
    title: "Quality Check",
    description:
      "Every product undergoes strict quality inspection before packaging.",
    icon: ShieldCheck,
  },
  {
    title: "Delivered Fresh",
    description:
      "Fresh produce reaches customers quickly while maintaining quality.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-green-900 to-green-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-green-500 px-5 py-2 rounded-full text-sm font-medium">
            Farming Process
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            From Soil To Table
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-2xl">
            Our sustainable farming process ensures every product is
            fresh, healthy, and grown with care.
          </p>

        </div>
      </section>

      {/* Process Cards */}
      <section className="relative -mt-10 md:-mt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      size={42}
                      className="text-green-600"
                    />

                    <span className="text-4xl font-bold text-green-100">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh Produce, Every Time
            </h2>

            <p className="text-gray-600 mb-6">
              Our commitment to sustainable farming ensures the highest
              quality vegetables, fruits, and farm products.
            </p>

            <a
              href="/products"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Explore Products
            </a>
          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}