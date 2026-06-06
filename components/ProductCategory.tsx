"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  name: string;
  image: string;
  description: string;
  details?: string;
  highlights?: string[];
}

interface ProductCategoryProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export default function ProductCategory({
  title,
  subtitle,
  products,
  
}: ProductCategoryProps){
  const [selectedProduct, setSelectedProduct] =
  useState<Product | null>(null);
  return (
    <>
      <Navbar />
      {selectedProduct && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">

      <div className="relative h-64">
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          {selectedProduct.name}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          {selectedProduct.details}
        </p>

        <div className="space-y-3">
          {selectedProduct.highlights?.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-gray-700"
            >
              <span className="text-green-600">✓</span>
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setSelectedProduct(null)}
          className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      <main className="bg-green-50 min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-87.5 md:h-125">
          <Image
            src="/farm-banner.jpg"
            alt={title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/60" />

          {/* Content Layer */}
          <div className="absolute inset-0 z-10">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-6 pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white hover:text-green-300 transition font-medium"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center h-65 md:h-95 text-center px-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-4">
                🌿 Organic Collection
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {title}
              </h1>

              <p className="text-lg md:text-xl text-white max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <section className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-bold text-green-700 text-lg">100%</h3>
                <p className="text-sm text-gray-600">Organic</p>
              </div>

              <div>
                <h3 className="font-bold text-green-700 text-lg">Fresh</h3>
                <p className="text-sm text-gray-600">Daily Harvest</p>
              </div>

              <div>
                <h3 className="font-bold text-green-700 text-lg">Local</h3>
                <p className="text-sm text-gray-600">Farm Grown</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Heading */}
        <section className="pt-14">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-green-900">
              Available Products
            </h2>

            <p className="text-gray-600 mt-3">
              Naturally grown and harvested with care.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <button onClick={() => setSelectedProduct(product)} className="mt-4 text-green-700 font-semibold hover:text-green-900 transition">
                   View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}