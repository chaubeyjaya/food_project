'use client';
import React, { useEffect, useRef } from 'react';

const ContactForm = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (window.google && mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.6139, lng: 77.2090 },
          zoom: 12,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD_qhEa-mphJzrf7PIKv3I-NcV1PX1hMjY`; // Replace with your real API key
      script.async = true;
      script.defer = true;
      script.addEventListener('load', () => {
        console.log('Google Maps script loaded.');
        initMap();
      });
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Google Map */}
      <div ref={mapRef} className="absolute inset-0 z-0 h-full bg-gray-300" />

      {/* Overlay Form */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
