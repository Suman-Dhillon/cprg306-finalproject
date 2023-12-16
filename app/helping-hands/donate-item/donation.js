import React from "react";
import Link from "next/link";

export default function DonationComponent() {
    return (
        <>
            <h1 className="font-bold mb-8 text-center text-4xl m-5">Donation Form</h1>
            <form class="w-full max-w-lg mb-30 mx-auto">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
                            Username
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" placeholder="janedoe@gmail.com" ></input>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-4" for="grid-category">
                        Category
                    </label>
                    <div class="relative ml-5">
                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                        <option>Household Items</option>
                        <option>Electronic</option>
                        <option>Clothing</option>
                        <option>Musical Instruments</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-4" for="grid-image">
                        Upload Image
                    </label>
                    <div class="w-full px-3">
                        <input
                            type="file"
                            accept="image/*"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-image"
                        />
                    </div>
                </div>

                <div class="flex justify-center mt-10">
                    <Link href="/helping-hands/dashboard" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </Link>
                </div>
            </form>
        </>
    );
}