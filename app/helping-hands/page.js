"use client";

import Link from "next/link";
import {useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log("Error in Signing in with GitHub: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Error in Signing out ", error);
    }
  };

  return (
    <section class="bg-center bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp8547031.jpg')] bg-gray-700 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to Helping Hands
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Welcome to Helping Hands, where generosity meets purpose. Our platform
          empowers you to donate gently used items like clothes and toys,
          providing a direct avenue for your goodwill to impact those in need.
          Simplifying the act of giving, Helping Hands transforms surplus
          possessions into valuable resources, creating a positive ripple effect
          in our community. Join us in making a lasting impact — your helping
          hands can shape a brighter future for all. Donate with purpose,
          embrace kindness, and be a catalyst for positive change.Welcome to
          "Helping Hands," where generosity meets purpose. Our platform empowers
          you to donate gently used items like clothes and toys, providing a
          direct avenue for your goodwill to impact those in need. Simplifying
          the act of giving, Helping Hands transforms surplus possessions into
          valuable resources, creating a positive ripple effect in our
          community. Join us in making a lasting impact — your helping hands can
          shape a brighter future for all. Donate with purpose, embrace
          kindness, and be a catalyst for positive change.
        </p>
        {user ? (
          <Link onClick={handleSignOut}
            href="/"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign Out
          </Link>
        ) : (
          <Link onClick={handleSignIn}
            href="/helping-hands/dashboard"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign In
          </Link>
        )}
          <Link
            href="/helping-hands/learn-more"
            class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </Link>
      </div>
    </section>
  );
}

