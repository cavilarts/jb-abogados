import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <main className="relative w-screen">
      <NavBar />
      <section className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-4 lg:pb-72">
        <Hero />
      </section>
      <section className="relative pt-16 pb-32 overflow-hidden bg-white space-y-24">
        <Card
          image="/images/mazo.jpeg"
          title="Servicios jurídicos integrales"
          text="Desde derecho mercantil hasta derecho laboral, nuestro equipo de expertos ofrece una amplia gama de servicios jurídicos para proteger sus intereses empresariales."
        />
        <Card
          inverted
          image="/images/biblioteca.jpeg"
          title="Asequible y accesible"
          text="Obtenga asesoramiento personalizado de nuestros experimentados abogados, que comprenden las necesidades específicas de su empresa."
        />
        <Card
          image="/images/justicia.jpeg"
          title="Asequible y accesible"
          text="Nuestro enfoque flexible de los precios y la accesibilidad significa que puede acceder a los servicios jurídicos que necesita a un precio que se adapte a su empresa."
        />
      </section>
    </main>
  );
}

export default App;
