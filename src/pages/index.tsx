import Hero from "@/components/Hero";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
