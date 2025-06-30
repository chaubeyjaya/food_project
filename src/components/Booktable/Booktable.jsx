
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Booktable = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    person: "1 Person",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { date, time, name, phone } = formData;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!date) {
      return "Please select a date.";
    }
    if (!time) {
      return "Please select a time.";
    }
    if (!name || !nameRegex.test(name)) {
      return "Please enter a valid name (letters only).";
    }
   

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validateForm();

    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    setError("");
    console.log("Form submitted:", formData);

    // ✅ Navigate to success page
    router.push("/successpage");
  };

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          title="map"
          width="100%"
          height="100%"
          style={{ filter: "grayscale(0.4) opacity(0.6)" }}
          frameBorder="0"
          src="https://maps.google.com/maps?q=passaic%20new%20jersey&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative z-10 max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Book A Table</h2>
        <p className="text-center text-gray-600 mb-6">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-600 text-sm text-center mb-2 font-medium">{error}</div>
          )}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="X-XXX-XXX-XXXX"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <select
            name="person"
            value={formData.person}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          >
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
            <option>5+ Persons</option>
          </select>
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-semibold"
          >
            Book A Table
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booktable;





