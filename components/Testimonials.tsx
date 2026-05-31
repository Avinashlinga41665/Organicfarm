export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Hyderabad",
      review:
        "The vegetables are always fresh and delivered on time. You can truly taste the difference of organic farming.",
    },
    {
      name: "Priya Sharma",
      location: "Vijayawada",
      review:
        "Excellent quality fruits and herbs. My family has been purchasing regularly for months.",
    },
    {
      name: "Anil Reddy",
      location: "Guntur",
      review:
        "Very trustworthy farm. Fresh produce, fair prices, and friendly service every time.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are proud to provide fresh, healthy, and organically grown
            produce directly from our farm to your family.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* Customer */}
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-600">500+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-600">100%</h3>
            <p className="text-gray-600 mt-2">Organic Produce</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-600">50+</h3>
            <p className="text-gray-600 mt-2">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-600">10+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}