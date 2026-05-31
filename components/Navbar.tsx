"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/farming-process", label: "Process" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden md:block bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <p>🌱 100% Organic & Natural Farming</p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@greenfarm.com"
              className="flex items-center gap-2 hover:text-green-200"
            >
              <Mail size={14} />
              hello@greenfarm.com
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-green-200"
            >
              <Phone size={14} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <span className="text-2xl">🌱</span>

              <div>
                <h1 className="text-xl md:text-2xl font-bold text-green-700">
                  Green Farm
                </h1>

                <p className="hidden md:block text-xs text-gray-500">
                  Organic & Natural
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all ${
                    pathname === item.href
                      ? "text-green-600 border-b-2 border-green-600 pb-1"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden px-3 py-2"
            >
              <Menu
                size={34}
                strokeWidth={2}
                className="text-gray-800"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                Menu
              </h2>

              <button onClick={() => setMenuOpen(false)}>
                <X
                  size={36}
                  strokeWidth={1.5}
                  className="text-black"
                />
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col p-5 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full px-5 py-4 rounded-xl transition-all ${
                    pathname === item.href
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CONTACT INFO */}
            <div className="border-t p-5 mt-4">
              <div className="space-y-4 text-gray-700">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3"
                >
                  <Phone size={18} />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:hello@greenfarm.com"
                  className="flex items-center gap-3"
                >
                  <Mail size={18} />
                  hello@greenfarm.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}