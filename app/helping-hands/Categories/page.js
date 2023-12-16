"use client";

import React, { useState } from "react";
import HouseholdItems from "./HouseholdItems";
import Electronics from "./Electronics";
import MusicInstruments from "./MusicInstruments";

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
                return <MusicInstruments />;
            default:
                return null;
        }
    };

    return (
        <>
            <div>
                <h1 className="font-bold mb-8 text-center text-4xl m-5">Find items you need and contact the donor</h1>
                <p className="mb-5">Choose the category of items you need:</p>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("household")}>Household Items</button>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("electronics")}>Electronics</button>
                <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-5" onClick={() => handleCategorySelect("clothing")}>Clothing</button>
            </div>
            {renderCategoryComponent()}
        </>
    );
}
