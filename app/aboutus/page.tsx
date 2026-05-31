import Image from "next/image";
import Link from "next/link";
import { Leaf, Sprout, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 md:py-20">
        <Image
    src="/images/farm-banner.jpg"
    alt="Farm"
    fill
    className="object-cover"
  />
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-green-500 px-5 py-2 rounded-full text-sm font-medium">
            About Green Farm
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 max-w-4xl leading-tight">
            Growing Healthy Food,
            Naturally & Sustainably
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-2xl leading-8">
            We are a family-owned organic farm dedicated to producing
            fresh, chemical-free produce while protecting the environment
            for future generations.
          </p>
        </div>
      </section>

      {/* About Card */}
      <section className="relative -mt-10 md:-mt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">

              <div className="relative min-h-[300px] md:min-h-[500px]">
                <Image
                  src="/images/family-farm.jpg"
                  alt="Farm Family"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                <span className="text-green-600 font-semibold uppercase tracking-wider">
                  Our Story
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
                  Farming With Passion
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                  Green Farm was founded with a simple vision:
                  to provide healthy and naturally grown food while
                  preserving the environment through sustainable
                  farming methods.
                </p>

                <p className="mt-4 text-gray-600 leading-8">
                  Every harvest is grown with care using eco-friendly
                  cultivation practices. We believe good food starts
                  with healthy soil, clean water, and responsible farming.
                </p>

                <Link
                  href="/products"
                  className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Products
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Why Choose Us
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We combine traditional farming values with modern sustainable
              practices to deliver the freshest produce possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <Leaf
                size={48}
                className="text-green-600 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                100% Organic
              </h3>

              <p className="text-gray-600">
                Fresh produce grown naturally without harmful chemicals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <Sprout
                size={48}
                className="text-green-600 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                Sustainable Farming
              </h3>

              <p className="text-gray-600">
                Eco-friendly practices that protect our land and future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <Users
                size={48}
                className="text-green-600 mb-5"
              />

              <h3 className="text-xl font-bold mb-3">
                Trusted By Families
              </h3>

              <p className="text-gray-600">
                Providing quality farm products to happy customers.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}