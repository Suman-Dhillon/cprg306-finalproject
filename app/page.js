import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold dark:text-white">CPRG 306: Web Development 2 - Final Project</h1>
      <p className="my-4 text-lg text-gray-500"> Helping Hands is a transformative project designed to facilitate the act of giving and receiving by connecting donors with individuals and communities in need. The platform serves as a user-friendly and secure hub for donations, encompassing a diverse range of items such as clothing, toys, electronics, and furniture. With a mission to foster a culture of generosity and positive impact, Helping Hands empowers users to make a meaningful difference in the lives of others.</p>

      <h2 className="text-2xl font-extrabold dark:text-white">Key Features</h2>
      <p className="my-2 text-lg text-gray-500">User-Friendly Platform: Intuitive design and easy navigation for a seamless donation experience.</p>
      <p className="my-2 text-lg text-gray-500">Diverse Item Categories: Accommodating a wide range of items ensures inclusivity and broadens the impact of contributions.</p>
      <p className="my-2 text-lg text-gray-500">Security and Transparency: Prioritizing the safety of user data and transactions, and providing transparent tracking of the impact of donations.</p>
      <p className="my-2 text-lg text-gray-500">Community Engagement: Building a supportive community where every contribution, regardless of size, contributes to creating a world where kindness knows no bounds.</p>
      <p className="my-2 text-lg text-gray-500">Join Helping Hands in creating a brighter future through the simple yet powerful act of giving, where each helping hand shapes a positive impact on individuals and communities worldwide.</p>

      <h2 className="text-2xl font-extrabold dark:text-white">Our Team</h2>
      <p className="my-2 text-lg text-gray-500">Name: Sumandeep Kaur, 000891665 (Created Profile form, Donation form, Dashboard, handled navigation and user authentication)</p>
      <p className="my-2 text-lg text-gray-500">Name: Japsimran Kaur, 000890029 (Created Home page, Learn More Page, Categories and did testing/debugging)</p>

      <h2 className="text-2xl font-extrabold dark:text-white">Submitted To</h2>
      <p className="my-3 text-lg text-gray-500">Hani Mohammed, CPRG 306-D</p>

      <h2 className="text-2xl font-extrabold dark:text-white">Lets get started </h2>
      <Link href="/helping-hands" className="hover:underline">Helping Hands</Link>

      <br />
    </>
  );
}
