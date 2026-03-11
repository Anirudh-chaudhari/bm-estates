"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    phone: "",
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
          source: "BM Estates Contact Form",
        }),
      });

      if (response.ok) {
        alert("Thank you for your message! We'll be in touch soon.");
        setFormData({
          title: "",
          name: "",
          email: "",
          phone: "",
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
    <div className="bg-bm-blue rounded-lg p-6 md:p-8 text-white">
      <h3 className="text-xl font-semibold mb-2">Preferred Method of Contact</h3>
      <p className="text-white/80 mb-6">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">Title</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:border-white bg-white text-gray-900"
            required
          >
            <option value="">Select Title</option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="ms">Ms</option>
            <option value="dr">Dr</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:border-white bg-white text-gray-900 placeholder-gray-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:border-white bg-white text-gray-900 placeholder-gray-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:border-white bg-white text-gray-900 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 border border-white/30 rounded focus:outline-none focus:border-white bg-white text-gray-900 placeholder-gray-500 resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="w-full border-white text-white hover:bg-white hover:text-bm-blue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
