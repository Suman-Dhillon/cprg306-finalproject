"use client";

import React, { useState } from "react";

const Electronics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState("");

  const images = [
    "https://the-gadgeteer.com/wp-content/uploads/2021/06/nutribullet-juicer-15-768x661.jpg",
    "https://allproapplianceservice.com/wp-content/uploads/2020/05/outlets-used-appliance-donation.jpg",
    "https://www.energytexas.com/blog/wp-content/uploads/2023/05/How-to-Dispose-of-Your-Electronic-E-Waste.jpeg",
    "https://www.retirepc.com/wp-content/uploads/2022/02/electronic-recycling-better-than-donation-min.png",
    "https://tse4.mm.bing.net/th?id=OIP.BgEIe0xdP3wWz3k1naW1cQHaEV&pid=Api&P=0&h=220",
    // Add image URLs here
  ];

  const contacts = [
    "Paulbarnett@hotmail.com",
    "joolie06@gmail.com",
    "koodie098@yahoo.com",
    "jassiqa23@gmail.com",
    "jasemon89@yahoo.com",
    // Add contact emails here corresponding to each image
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setContactInfo(contacts[index]);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-96 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute block transition-transform duration-300 transform -translate-x-full ${
              index === currentIndex ? "translate-x-0" : ""
            } rounded-md overflow-hidden shadow-lg`}
          >
            <img
              src={src}
              className="object-contain h-50 w-96 mx-auto"
              alt="house-hold-item"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none mt-60 text-white bg-gray-800 hover:bg-gray-700"
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <button
        type="button"
        className="absolute top-1/2 end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none mt-60 text-white bg-gray-800 hover:bg-gray-700"
        onClick={handleNextClick}
      >
        Next
      </button>

      {contactInfo && (
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 text-center z-10">
          <p className="text-lg font-semibold text-gray-800">Contact: {contactInfo}</p>
        </div>
      )}

    </div>
  );
};

export default Electronics;
