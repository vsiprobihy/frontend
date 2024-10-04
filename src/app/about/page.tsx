import { NextPage } from "next";
import { Logo } from "~/components/components";

const About: NextPage = () => (
  <main className="p-40 text-center text-3xl text-dark">
    <Logo isLarge />
    <p className="pt-10">місце зустрічі всіх бігунів.</p>
  </main>
);

export default About;
