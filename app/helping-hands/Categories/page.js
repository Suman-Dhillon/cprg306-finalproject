"use client";

import React, { useState } from "react";
import HouseholdItems from "./HouseholdItems";
import Electronics from "./Electronics";
import MusicInstruments from "./MusicInstruments";
import Clothing from "./Clothing";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const renderCategoryComponent = () => {
        switch (selectedCategory) {
            case "household":
                return <HouseholdItems />;
            case "electronics":
                return <Electronics />;
            case "clothing":
                return <Clothing />;
            case "music":
                return <MusicInstruments />;
            default:
                return null;
        }
    };

    return (
        <>
            <section class="bg-center bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp8547031.jpg')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="font-bold mb-8 text-center text-4xl m-5 text-white">Find items you need and contact the donor</h1>
                <p className="mb-5 text-white">Choose the category of items you need:</p>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("household")}>Household Items</button>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("electronics")}>Electronics</button>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("clothing")}>Clothing</button>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("music")}>Music Instruments</button>
                </div>
            
            {renderCategoryComponent()}
            </section>
        </>
    );
}
