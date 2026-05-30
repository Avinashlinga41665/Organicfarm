import Image from "next/image";

const products = [
  "Vegetables",
  "Fruits",
  "Herbs",
  "Grains"
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Our Products
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl overflow-hidden shadow"
            >
              <Image
                src="/images/product.jpg"
                alt={item}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}