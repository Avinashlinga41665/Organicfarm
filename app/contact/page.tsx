import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Organic Farm for enquiries, visits and bulk orders.",
};
export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-green-900 to-green-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-green-500 px-5 py-2 rounded-full text-sm font-medium">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Get In Touch
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-2xl">
            We'd love to hear from you. Reach out for product
            inquiries, bulk orders, farm visits, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-10 md:-mt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Phone
                className="text-green-600 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold mb-3">
                Phone
              </h3>

              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <MapPin
                className="text-green-600 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold mb-3">
                Address
              </h3>

              <p className="text-gray-600">
                Hyderabad,
                Telangana,
                India
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Clock
                className="text-green-600 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold mb-3">
                Working Hours
              </h3>

              <p className="text-gray-600">
                Mon - Sat
                <br />
                8:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Send Us A Message
            </h2>

            <form className="grid gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* Location */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Location
            </h2>

            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}