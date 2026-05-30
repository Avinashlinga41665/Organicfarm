import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Photo Gallery
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[1,2,3,4,5].map((item) => (
            <Image
              key={item}
              src="/images/gallery.jpg"
              alt=""
              width={300}
              height={200}
              className="rounded-lg object-cover h-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}