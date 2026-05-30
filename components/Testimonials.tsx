export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p>
              Fresh vegetables and amazing quality.
            </p>

            <h4 className="font-bold mt-4">
              - Customer
            </h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>
              Best organic farm in the region.
            </p>

            <h4 className="font-bold mt-4">
              - Customer
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}