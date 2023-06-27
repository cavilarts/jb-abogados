import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero min-h-screen font-karma"
      style={{
        backgroundImage:
          "url(/images/altagamba-altagamba-HDypKeIBWfw-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Servicios jurídicos de confianza.
          </h1>
          <p className="mb-5">
            Somos un despacho de abogados comprometido en brindar servicios
            legales de calidad tanto a personas como a empresas. Nuestro
            objetivo es proporcionar soluciones jurídicas efectivas y
            personalizadas para cubrir todas sus necesidades legales.
          </p>
          <p className="mb-5">
            Seleccione el tipo de servicio que necesita para obtener más
            información.
          </p>
          <div>
            <Link className="btn btn-primary mr-4" href="/empresas">
              Empresas
            </Link>
            <Link className="btn btn-secondary" href="/personas">
              Personas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
