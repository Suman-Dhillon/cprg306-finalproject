import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function DashboardComponent() {
    return (
        <>
            <h1 className="font-bold mb-8 text-center text-4xl m-5">Dashboard</h1>
            <div className="flex space-x-10 mt-20">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image class="object-cover h-40 w-96" src="https://www.shutterstock.com/image-illustration/3d-render-user-avatar-interface-260nw-2351220871.jpg" alt="profile image"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Profile Form</div>
                        <p class="text-gray-700 text-base">
                        Please fill out the form below to complete your account setup.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <Link href="/helping-hands/profile-form"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Fill out the form
                        </Link>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image class="object-contain h-40 w-96" src="https://www.creb.com/-/media/Public/CREBcom/News/CREBNow/2021/March/SocialDonateToDeclutterGetty.jpg?sc_lang=en.jpg" alt="donations"/> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Donate</div>
                        <p class="text-gray-700 text-base">
                        Help the community by donating items you no longer need. Make a difference today.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <Link href="/helping-hands/donate-item"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Donate Now
                        </Link>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image class="object-cover h-40 w-96" src="https://www.shutterstock.com/image-vector/sharing-clothes-people-donation-concept-260nw-1860972010.jpg" alt="donations"/> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Find Items</div>
                        <p class="text-gray-700 text-base">
                        Search the category and the item you need. Contact the donor via email.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <Link href="/helping-hands/Categories"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Find Items
                        </Link>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image class="object-cover h-40 w-96" src="https://us.123rf.com/450wm/kchung/kchung1609/kchung160900599/62327185-learn-more-hanging-sign-3d-illustration-isolated-on-grey-wall.jpg?ver=6" alt="learn more"/> 
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Learn More</div>
                        <p class="text-gray-700 text-base">
                        If you want to know more about us, our mission, and our vision, please visit.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <Link href="/helping-hands/learn-more"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn more
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
