"use client";

import React, { useState } from "react";

const HouseholdItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contactInfo, setContactInfo] = useState("");

  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.VIzq9k4H0DM62aMyDfZgIQHaFB&pid=Api&P=0&h=220",
    "https://www.addisoncountyrecycles.org/fileadmin/_processed_/3/a/csm_Food_Donation_Box_d249c1e546.jpg",
    "https://householdgoods.org/wp-content/uploads/2016/01/hg-pots-and-pans-1030x685.jpg",
    "https://assets-chicagowolves-com.s3.amazonaws.com/wp-content/uploads/e6dd310fab9ad41ff1426c538cc12aa7.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.DgniVdQh97hFGWSA5zh2zwHaE8&pid=Api&P=0&h=220",
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
      <div className="relative h-80 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute block transition-transform duration-300 transform -translate-x-full ${
              index === currentIndex ? "translate-x-0" : ""
            } rounded-md overflow-hidden shadow-lg`}
          >
            <img
              src={src}
              className="object-contain h-50 w-96 mx-10" 
              alt="house-hold-item"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5 ml-10"
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <button
        type="button"
        className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5 mx-10"
        onClick={handleNextClick}
      >
        Next
      </button>

      {contactInfo && (
        <div className=" w-150 bg-white p-4 text-center mx-10">
          <p className="text-lg font-semibold text-gray-800">Contact: {contactInfo}</p>
        </div>
      )}

    </div>
  );
};

export default HouseholdItems;
