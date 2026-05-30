const process = [
  "Soil Preparation",
  "Natural Cultivation",
  "Harvesting",
  "Quality Check",
  "Delivered Fresh",
];

export default function Process() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Our Farming Process
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {process.map((step) => (
            <div
              key={step}
              className="bg-white p-6 rounded-xl text-center shadow"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}