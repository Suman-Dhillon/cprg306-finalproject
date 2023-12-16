"use client";

import React, { useState } from "react";

const Clothing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState("");

  const images = [
    "https://i.pinimg.com/originals/7f/dd/de/7fddde28c46fec30eb9977c257478331.jpg",
    "https://i.etsystatic.com/25908391/r/il/2d9abd/3252410099/il_1140xN.3252410099_n68f.jpg",
    "https://www.retailgazette.co.uk/wp-content/uploads/2020/03/Second-Hand_Clothes_Vintage_ST.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.Ewspqip7bxXHZub0bDM7RgHaE8&pid=Api&P=0&h=220",
    "http://4.bp.blogspot.com/-OotwFaWI_ZI/TzKDabqLuGI/AAAAAAAAB-s/Nc-msvjmMXc/w1200-h630-p-k-no-nu/DSC_0001-1.JPG",
    // Add image URLs here
  ];

  const contacts = [
    "Carmensheriff@gmail.com",
    "Naomijones09@icloud.com",
    "James007@yahoo.com",
    "Marycarson@gmail.com",
    "Owenrose@yahoo.com",


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

export default Clothing;
