import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-[100vw] h-[100vh]">
      <Image
        className="object-cover absolute"
        src="/assets/hero_home.jpg"
        alt="Jonathan Blanco"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <article className="absolute top-1/2 text-center w-full">
        <p className="text-3xl text-white leading-10">Situaciones especiales</p>
        <p className="text-3xl text-yellow-500 leading-10">Requieren</p>
        <p className="text-3xl text-white leading-10">Soluciones Especiales</p>
        <Link
          href="#"
          className="
            relative
          text-white
          uppercase
          before:content-[''] before:h-[2px] before:bg-white before:w-[50%] before:absolute before:right-full before:top-1/2 before:mx-3
          after:content-[''] after:h-[2px] after:bg-white after:w-[50%] after:absolute after:left-full after:top-1/2 after:mx-3"
        >
          Ver mas
        </Link>
      </article>
    </section>
  );
}
