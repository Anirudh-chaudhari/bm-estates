import { rentProperties } from "@/data/properties";
import PropertyGrid from "@/components/property/PropertyGrid";

export default function LettingsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1e7ce8] to-[#42a5f5] py-12" style={{ marginTop: "80px" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Properties to Rent in Leicester
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Browse our selection of properties available to rent
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <PropertyGrid properties={rentProperties} />
        </div>
      </section>
    </>
  );
}
