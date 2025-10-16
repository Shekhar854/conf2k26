'use client'
import React from 'react';

const LocationMap = () => {
  return (
    <div className="my-8 p-4 border rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-red-700 mb-6">Conference Location</h1>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.933496596528!2d77.48961477607098!3d28.481549375747527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb07c7e0cae3%3A0x82b288a0fa2a6a5!2sIIMT%20COLLEGE%20KNOWLEDGE%20PARK%203%20%2C%20GREATER%20NOIDA!5e0!3m2!1sen!2sin!4v1760561540348!5m2!1sen!2sin"
          width="1500"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
