import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function HeroNosotros() {
  return (
    <section
      className="hero min-h-[400px] font-karma"
      style={{
        backgroundImage:
          "url(/images/mikhail-pavstyuk-EKy2OTRPXdw-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5 text-2xl">
            <span>
              &ldquo;Por supuesto que la gente se esta haciendo inteligente;
              están dejando que sus abogados, en lugar de sus consciencias, sean
              sus guías.&rdquo;
            </span>
          </p>
          <p>- Will Rogers</p>
        </div>
      </div>
    </section>
  );
}
