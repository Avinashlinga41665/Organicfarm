import {
  GraduationCap,
  Users,
  Trees,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function FarmTours() {
  return (
    <>
    <Navbar/>
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-green-900 to-green-700 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          <span className="inline-block bg-green-500 px-5 py-2 rounded-full text-sm font-medium">
            Farm Tours
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Experience Life On The Farm
          </h1>

          <p className="mt-6 text-lg text-green-100 max-w-3xl">
            Discover sustainable farming, interact with nature,
            learn how food is grown, and create memorable
            experiences for students, families, and groups.
          </p>

        </div>
      </section>

      {/* Tour Types */}
      <section className="relative -mt-10 md:-mt-14 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {/* School Tours */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <GraduationCap
                size={50}
                className="text-green-600 mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                School Tours
              </h3>

              <p className="text-gray-600 leading-7">
                Educational visits where students learn about
                farming, crop cultivation, composting, and
                sustainable agriculture through hands-on
                experiences.
              </p>
            </div>

            {/* Family Visits */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <Users
                size={50}
                className="text-green-600 mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                Family Visits
              </h3>

              <p className="text-gray-600 leading-7">
                Enjoy a peaceful day at the farm, explore fields,
                experience harvesting, and reconnect with nature
                alongside your family.
              </p>
            </div>

            {/* Group Tours */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <Trees
                size={50}
                className="text-green-600 mb-5"
              />

              <h3 className="text-2xl font-bold mb-4">
                Group Tours
              </h3>

              <p className="text-gray-600 leading-7">
                Perfect for organizations, clubs, and community
                groups looking for an educational and refreshing
                outdoor experience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* What Visitors Experience */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              What You'll Experience
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-green-50 rounded-2xl p-6">
                🌱 Learn how crops are grown naturally
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                🚜 Explore farming equipment and techniques
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                🍅 Experience harvesting activities
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                🌾 Understand sustainable farming practices
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                📸 Capture memorable farm moments
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                🥬 See fresh produce directly from the fields
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <Phone
              size={50}
              className="mx-auto text-green-600 mb-6"
            />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book A Farm Visit
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're planning a school trip, family outing,
              or group visit, we'd love to welcome you to our farm.
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Book Through WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}