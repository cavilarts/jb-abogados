import Image from "next/image";

import Hero from "@/components/Hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container mx-auto max-w-7xl font-karma">
        <h2 className="text-4xl my-10 font-bold text-center">PERSONAS.</h2>
        <article className="grid lg:grid lg:mx-auto lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
          <div className="lg:col-start-1 order-1 mb-12 sm:mb-16 lg:mb-0 relative">
            <figure className="figure">
              <Image src="/images/mazo.jpeg" alt="Mazo de madera" fill />
            </figure>
          </div>
          <div className="max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 order-1 mb-12 sm:mb-16 lg:mb-0">
            <p>
              Si usted es una persona que requiere asesoramiento legal en áreas
              como derecho familiar, herencias, contratos o litigios civiles,
              estamos aquí para ayudarlo/a. Nuestro equipo de abogados expertos
              se encargará de proteger sus derechos y encontrar la mejor manera
              de resolver cualquier situación legal que pueda enfrentar.
            </p>
            <Link className="btn btn-secondary" href="/">
              Contáctenos
            </Link>
          </div>
        </article>
        <h2 className="text-4xl my-10 font-bold text-center">EMPRESAS.</h2>
        <article className="grid lg:grid lg:mx-auto lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
          <div className="lg:col-start-2 order-2 mb-12 sm:mb-16 lg:mb-0 relative">
            <figure className="figure">
              <Image src="/images/biblioteca.jpeg" alt="Biblioteca" fill />
            </figure>
          </div>
          <div className="max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 order-1 mb-12 sm:mb-16 lg:mb-0">
            <p>
              Para las empresas, ofrecemos una amplia gama de servicios legales
              que abarcan desde la constitución y registro de la compañía,
              contratos comerciales, protección de propiedad intelectual, hasta
              asesoramiento en temas laborales y resolución de conflictos.
              Entendemos los desafíos legales que enfrentan las empresas y
              estamos preparados para brindarles el apoyo necesario para su
              crecimiento y éxito.
            </p>
            <Link className="btn btn-primary" href="/">
              Contáctenos
            </Link>
          </div>
        </article>

        <h2 className="text-4xl my-10 font-bold text-center">
          NUESTRO EQUIPO.
        </h2>
        <article className="grid lg:grid lg:mx-auto lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
          <div className="lg:col-start-1 order-1 mb-12 sm:mb-16 lg:mb-0 relative">
            <figure className="figure">
              <Image
                src="/images/redd-f-5U_28ojjgms-unsplash.jpg"
                alt="Equipo"
                fill
              />
            </figure>
          </div>
          <div className="max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-32 lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 order-1 mb-12 sm:mb-16 lg:mb-0">
            <p>
              En JBE ABOGADOS, nos enorgullece nuestro equipo de profesionales
              apasionados y dedicados, quienes se esfuerzan por brindar un
              servicio excepcional y una representación legal de primera clase.
              Estamos comprometidos con su éxito y trabajamos incansablemente
              para proteger sus derechos e intereses en todas las etapas del
              proceso legal.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
