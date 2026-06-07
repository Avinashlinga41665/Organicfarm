import {
  Leaf,
  Tractor,
  Sprout,
  ShoppingBasket,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    desc: "Pure and natural produce.",
  },
  {
    icon: Tractor,
    title: "Sustainable Farming",
    desc: "Eco-friendly methods.",
  },
  {
    icon: Sprout,
    title: "Chemical Free",
    desc: "Healthy and safe food.",
  },
  {
    icon: ShoppingBasket,
    title: "Fresh Harvest",
    desc: "Delivered fresh daily.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <item.icon
                size={42}
                className="mx-auto text-green-600"
              />

              <h3 className="font-bold mt-3 text-black">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 pb-2 min-w-max">
            {features.map((item) => (
              <div
                key={item.title}
                className="
                  w-44
                  bg-white
                  border
                  rounded-2xl
                  p-4
                  shadow-sm
                  shrink-0
                "
              >
                <item.icon
                  size={32}
                  className="text-green-600"
                />

                <h3 className="font-semibold mt-3 text-black">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}