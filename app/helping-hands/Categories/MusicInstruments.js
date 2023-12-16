"use client";

import React, { useState } from "react";

const MusicInstruments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState("");

  const images = [
    "https://i.pinimg.com/originals/f4/17/e8/f417e848383e0996d3a8a0ffd5748b29.jpg",
    "http://www.starpackaging.lk/images/projects/Project-21/3.jpg",
    "https://i.pinimg.com/originals/56/1a/e6/561ae69ca75438c0c681b706811f1ba6.jpg",
    "https://1.bp.blogspot.com/-W7FBy175vWo/XEGRf4r5zaI/AAAAAAAAtRY/sYBwfp7oi6Q6y-GCBoJiNzJGIZsYLpmkwCLcBGAs/s1600/violins_different_sizes.jpg",
    "https://birdsongtt.org/media/images/brass_and_wood_winds_donated_by_suporter_from.width-1200.jpg",
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

export default MusicInstruments;


