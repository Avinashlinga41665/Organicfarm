import ProductCard from "./ProductCard";
import { productCategories } from "@/data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-900">
            Our Products
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our range of fresh, healthy and naturally grown organic
            produce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <ProductCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}