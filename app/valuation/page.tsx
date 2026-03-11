"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    bedrooms: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: "BM Estates Valuation Form",
        }),
      });

      if (response.ok) {
        alert("Thank you! We'll be in touch with your valuation shortly.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          propertyType: "",
          bedrooms: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#1e7ce8] to-[#42a5f5] py-12" style={{ marginTop: "80px" }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Free Property Valuation
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Get an accurate valuation of your property in Leicester
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-8 text-center">
                Fill in the form below and one of our experienced valuers will
                provide you with a free, no-obligation valuation of your
                property.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <Input
                  label="Property Address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Property Address"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Property Type"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select Type" },
                      { value: "flat", label: "Flat" },
                      { value: "apartment", label: "Apartment" },
                      { value: "terraced", label: "Terraced House" },
                      { value: "semi", label: "Semi-Detached" },
                      { value: "detached", label: "Detached House" },
                      { value: "bungalow", label: "Bungalow" },
                    ]}
                    required
                  />
                  <Select
                    label="Bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select Bedrooms" },
                      { value: "1", label: "1 Bedroom" },
                      { value: "2", label: "2 Bedrooms" },
                      { value: "3", label: "3 Bedrooms" },
                      { value: "4", label: "4 Bedrooms" },
                      { value: "5+", label: "5+ Bedrooms" },
                    ]}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any additional details about your property..."
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bm-blue focus:ring-1 focus:ring-bm-blue resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Free Valuation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
