"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    registerAs: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
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
          source: "BM Estates Registration Form",
        }),
      });

      if (response.ok) {
        alert("Thank you for registering! We'll be in touch soon.");
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          registerAs: "",
          propertyType: "",
          minPrice: "",
          maxPrice: "",
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
            Register with BM Estates
          </h1>
          <p className="text-white/80 text-center mt-4 text-lg">
            Be the first to know about new properties
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-8 text-center">
                Register with us to receive updates on new properties that match
                your criteria, before they hit the market.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Personal Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select" },
                      { value: "mr", label: "Mr" },
                      { value: "mrs", label: "Mrs" },
                      { value: "miss", label: "Miss" },
                      { value: "ms", label: "Ms" },
                    ]}
                  />
                  <Input
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>

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
                  />
                </div>

                <Input
                  label="Address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                />

                <h3 className="text-lg font-semibold text-gray-800 mb-4 pt-4">
                  Property Requirements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Register As"
                    name="registerAs"
                    value={formData.registerAs}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select" },
                      { value: "buyer", label: "Buyer" },
                      { value: "tenant", label: "Tenant" },
                      { value: "landlord", label: "Landlord" },
                      { value: "both", label: "Buyer & Tenant" },
                    ]}
                    required
                  />
                  <Select
                    label="Property Type"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Select Type" },
                      { value: "any", label: "Any" },
                      { value: "flat", label: "Flat" },
                      { value: "house", label: "House" },
                      { value: "bungalow", label: "Bungalow" },
                    ]}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Minimum Price"
                    name="minPrice"
                    type="text"
                    value={formData.minPrice}
                    onChange={handleChange}
                    placeholder="Min Price (£)"
                  />
                  <Input
                    label="Maximum Price"
                    name="maxPrice"
                    type="text"
                    value={formData.maxPrice}
                    onChange={handleChange}
                    placeholder="Max Price (£)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about what you're looking for..."
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bm-blue focus:ring-1 focus:ring-bm-blue resize-none"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register Now"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
