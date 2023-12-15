"use client"
import React from "react";

export default function LearnMore() {
    return (
        <Layout>
            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">Learn More About Helping Hands</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Our Vision</h2>
                    <p>
                        Discover our commitment to creating a world where every act of kindness contributes to the well-being of individuals and families.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">How It Works</h2>
                    <p>
                        Explore the seamless donation process and understand how your contributions can transform unused items into valuable resources for those facing challenges.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Impact Stories</h2>
                    <p>
                        Read inspiring stories of how the Helping Hands community has made a tangible difference in the lives of others.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Get Involved</h2>
                    <p>
                        Find out how you can become an integral part of our mission, whether through donations, volunteering, or spreading the word.
                    </p>
                </section>

                <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Helping Hands™</a>. All Rights Reserved.
                    </span>
                </div>
                </footer>


                <Link href="/app/page.js">
                    <a className="text-blue-500 hover:underline">Back </a>
                </Link>
            </div>
        </Layout>
    );
}

