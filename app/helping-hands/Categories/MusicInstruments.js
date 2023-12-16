"use client";

import React, { useState } from "react";

const MusicInstruments= () => {
    const [showContact, setShowContact] = useState(false);
    const [contactInfo, setContactInfo] = useState("");

    const handleImageClick = (contact) => {
        setShowContact(true);
        setContactInfo(contact);
    };

    return (
        <div id="gallery" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img
                        src="https://s.alicdn.com/@sc04/kf/Hd6dfaf8456614fdd9de81bbc2871a295R.jpg_300x300.jpg"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Carmensheriff@gmail.com")}
                    />

                    <img
                        src="https://maximizeminimalism.com/wp-content/uploads/2019/09/Jars-From-Grocery-Items-Can-Be-Used-For-Storage.png"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Naomijones09@icloud.com")}
                    />

                    <img
                        src="https://cdn.store-assets.com/s/323023/f/4595336.jpeg"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Andymarwood478@hotmail.com")}
                    />

                    <img
                        src="https://i.ebayimg.com/00/s/NzY1WDEwMjQ=/z/OJEAAOSwJTNb5HiA/$_86.JPG"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Lindawallace@gmail.com")}
                    />

                    <img
                        src="https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/E9YAAOSwIB9fV2RU/$_86.JPG"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Catherineallan21@icloud.com")}
                    />

                    <img
                        src="https://www.besthealthmag.ca/wp-content/uploads/2020/05/GettyImages-1045500086-e1587040242117.jpg"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Katthyallan21@icloud.com")}
                    />

                    <img
                        src="https://2.bp.blogspot.com/-QBj1AQB_wcs/TZQmoMEENeI/AAAAAAAAAGQ/xOlAXieh2dQ/s1600/more+household+items+011.JPG"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("irrinana21@icloud.com")}
                    />

                   <img
                        src="http://img06.deviantart.net/e82d/i/2016/246/b/4/common_household_items_by_drummyfish-dagbncm.png"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("Paulstefon0104@icloud.com")}
                    />

                <img
                        src="https://dygtyjqp7pi0m.cloudfront.net/i/31235/27092494_1.jpg?v=8D49D66F5FCE820"
                        className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt=""
                        onClick={() => handleImageClick("oliviaminard01@icloud.com")}
                    />
                </div>
            </div>

            {showContact && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
                    <p>Contact: {contactInfo}</p>
                </div>
            )}

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default MusicInstruments
;