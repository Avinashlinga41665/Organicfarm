import Link from "next/link";
import {
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-green-950 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Green Farm
            </h3>

            <p className="text-gray-300 leading-7">
              We provide fresh, naturally grown vegetables,
              fruits, and farm products cultivated through
              sustainable and eco-friendly farming practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/farming-process"
                  className="hover:text-white transition"
                >
                  Farming Process
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0"
                />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0"
                />
                <span>
                  Hyderabad, Telangana, India
                </span>
              </div>

            </div>
          </div>

          {/* WhatsApp CTA */}
          <div>
           <h3 className="text-xl font-bold mb-4">
  Visit Our Farm
</h3>

<p className="text-gray-300 mb-5">
  Looking for fresh produce, bulk orders,
  school tours, family visits, or farm experiences?
  We'd love to hear from you.
</p>

<a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-lg font-semibold"
>
  Contact Us
</a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mt-12 pt-6">

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-300 text-sm text-center">
              © {new Date().getFullYear()} Green Farm.
              All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-300">
              <Link
                href="/aboutus"
                className="hover:text-white transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>

              <Link
                href="/products"
                className="hover:text-white transition"
              >
                Products
              </Link>
            </div>

          </div>

          {/* Codeweave Credit */}
          <div className="mt-8 text-center">

            <p className="text-green-200 text-xs uppercase tracking-[4px]">
              Designed & Developed By
            </p>

            <a
              href="https://myportfolio-rouge-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-white hover:text-green-300 transition">
                Codeweave
              </h4>
            </a>

            <p className="text-gray-300 text-sm mt-2">
              Crafting modern digital experiences.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}