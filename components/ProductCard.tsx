import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ProductCard({
  title,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          <div className="inline-flex items-center text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
            Explore →
          </div>
        </div>
      </div>
    </Link>
  );
}