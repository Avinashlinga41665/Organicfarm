import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const showcases = [
  {
    title: "Organic Farming",
    description:
      "We cultivate our crops using sustainable farming methods without harmful chemicals, ensuring healthier produce and a healthier environment.",
    image: "/images/gallery1.jpg",
  },
  {
    title: "Fresh Vegetable Harvest",
    description:
      "Every morning our vegetables are carefully harvested to preserve freshness, flavor, and nutritional value.",
    image: "/images/gallery2.jpg",
  },
  {
    title: "Seasonal Fruits",
    description:
      "Our fruit orchards produce naturally ripened fruits grown with patience and care throughout every season.",
    image: "/images/gallery3.jpg",
  },
  {
    title: "Farmers At Work",
    description:
      "Behind every harvest is a dedicated team working hard to maintain the highest standards of quality and sustainability.",
    image: "/images/gallery4.jpg",
  },
  {
    title: "Healthy Crop Fields",
    description:
      "Our fertile fields are carefully maintained using natural fertilizers and responsible farming techniques.",
    image: "/images/gallery5.jpg",
  },
  {
    title: "Farm To Table",
    description:
      "From planting seeds to delivering fresh produce, every step is handled with care and commitment.",
    image: "/images/gallery6.jpg",
  },
];

export default function Gallery() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-green-500 px-5 py-2 rounded-full text-sm font-medium">
            Farm Life Showcase
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Experience Life At Green Farm
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-3xl">
            Explore the journey behind our fresh produce—from healthy soil
            and sustainable cultivation to harvesting and delivery.
          </p>

        </div>
      </section>

      {/* Showcase Sections */}
      <section className="relative -mt-10 md:-mt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {showcases.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div
                className={`grid lg:grid-cols-2 items-center ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[280px] md:h-[450px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-14">

                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 font-bold mb-5">
                    {index + 1}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-6 text-gray-600 leading-8 text-lg">
                    {item.description}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Farm Statistics */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-8 shadow text-center">
              <h3 className="text-4xl font-bold text-green-600">
                50+
              </h3>
              <p className="text-gray-600 mt-2">
                Acres Farmed
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow text-center">
              <h3 className="text-4xl font-bold text-green-600">
                100%
              </h3>
              <p className="text-gray-600 mt-2">
                Organic
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow text-center">
              <h3 className="text-4xl font-bold text-green-600">
                500+
              </h3>
              <p className="text-gray-600 mt-2">
                Happy Customers
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow text-center">
              <h3 className="text-4xl font-bold text-green-600">
                10+
              </h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}