import Link from "next/link";
import developerInfo from "./developerInfo";

export default function Page() {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Final Project</h1>
      <developerInfo />
      <Link href="/helping-hands">Helping Hands</Link>
      <br />
    </>
  );
}
