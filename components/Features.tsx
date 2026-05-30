import {
  Leaf,
  Tractor,
  Sprout,
  ShoppingBasket
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    desc: "Pure and natural produce."
  },
  {
    icon: Tractor,
    title: "Sustainable Farming",
    desc: "Eco-friendly methods."
  },
  {
    icon: Sprout,
    title: "Chemical Free",
    desc: "Healthy and safe food."
  },
  {
    icon: ShoppingBasket,
    title: "Fresh Harvest",
    desc: "Delivered fresh daily."
  }
];

export default function Features() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="text-center"
          >
            <item.icon
              size={40}
              className="mx-auto text-green-600"
            />

            <h3 className="font-bold mt-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}