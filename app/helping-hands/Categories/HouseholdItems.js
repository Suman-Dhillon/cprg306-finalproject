"use client";

import React, { useState } from "react";

const HouseholdItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState("");

  const images = [
    "https://assets.wfcdn.com/im/97798544/resize-h445%5Ecompr-r85/2597/259702209/Kaelig+Extendable+Round+Dining+Table.jpg",
    "https://content.cylindo.com/api/v2/5035/products/ALTUS%20-%20SF%20-%202/frames/3/ALTUS%20-%20SF%20-%202.JPG?background=F7F8F6&feature=FABRIC:ALTUS%20-%20FOG&feature=OTTOMAN:OFF&feature=CHAISE:OFF&feature=ARMS:SLOPE&feature=PILLOWS:OFF&feature=LEGS:WOOD%20-%20DARK%20OAK&size=1536",
    "https://newsadmin.manchester.ac.uk/newsimages/567/28380_large.jpg",
    "https://www.thespruce.com/thmb/qahLNRLWfxiwZNVkkjOeUsSJbe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/donate-to-toys-for-tots-3255561_01-cf95b8c8f1b1419585a3c445096988ae.JPG",
    "https://www.at-home.co.in/cdn/shop/products/pebblely-2023-04-07T141424.246.jpg?v=1681195039",
    // Add image URLs here
  ];

  const contacts = [
    "Carmensheriff@gmail.com",
    "Naomijones09@icloud.com",
    "James007@yahoo.com",
    "Marycarson@gmail.com",
    "Owenrose@yahoo.com"
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

export default HouseholdItems;
