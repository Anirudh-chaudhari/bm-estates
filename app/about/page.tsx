import { Users, Award, MapPin, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1e7ce8] to-[#42a5f5] py-12" style={{ marginTop: "80px" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            About BM Estates
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Celebrating 20 years in business - 2006 to 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Welcome to BM Estates
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              BM Estates is a well-established estate agency based in Leicester,
              dedicated to providing professional and friendly property services to
              buyers, sellers, landlords, and tenants across Leicester and the
              surrounding areas.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2006, we have been helping our clients achieve their
              property goals for over 20 years. Our experienced team combines
              local market knowledge with modern technology to deliver
              exceptional results.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Whether you&apos;re looking to buy, sell, rent, or let a property,
              we&apos;re here to guide you through every step of your property
              journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Award className="text-[#1e7ce8] mx-auto mb-3" size={40} />
                <h3 className="text-xl font-semibold text-gray-800">20+ Years</h3>
                <p className="text-gray-600">Experience</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Users className="text-[#1e7ce8] mx-auto mb-3" size={40} />
                <h3 className="text-xl font-semibold text-gray-800">1000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <MapPin className="text-[#1e7ce8] mx-auto mb-3" size={40} />
                <h3 className="text-xl font-semibold text-gray-800">Leicester</h3>
                <p className="text-gray-600">Based</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <Clock className="text-[#1e7ce8] mx-auto mb-3" size={40} />
                <h3 className="text-xl font-semibold text-gray-800">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>

            <h2 className="text-3xl font-light text-gray-800 mb-6">
              Our Services
            </h2>
            <ul className="space-y-3 mb-12">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-[#1e7ce8] rounded-full" />
                Residential Property Sales
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-[#1e7ce8] rounded-full" />
                Property Lettings & Management
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-[#1e7ce8] rounded-full" />
                Free Property Valuations
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="w-2 h-2 bg-[#1e7ce8] rounded-full" />
                Financial Advice & Mortgage Services
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
