import Drawer from "@/components/Drawer/Drawer";
import "./globals.css";
import { Bitter, Karma } from "next/font/google";

const bitter = Bitter({ subsets: ["latin"] });
const karma = Karma({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "JBE Abogados",
  description:
    "¡Bienvenido/a a JBE ABOGADOS! Somos un destacado despacho de abogados comprometido en brindar servicios legales de calidad tanto a personas como a empresas. Nuestro experimentado equipo de abogados ofrece soluciones jurídicas efectivas y personalizadas en áreas como derecho familiar, herencias, contratos y litigios civiles, para satisfacer las necesidades legales de individuos. Además, proporcionamos un amplio espectro de servicios legales a empresas, desde la constitución y registro de compañías hasta asesoramiento en propiedad intelectual, contratos comerciales y resolución de conflictos laborales. Nuestro equipo altamente capacitado se enfoca en brindar un asesoramiento legal sólido y confiable, adaptado a las necesidades específicas de cada cliente. Contáctenos hoy mismo para obtener respuestas efectivas y eficientes a sus asuntos legales. En JBE ABOGADOS, somos su socio legal de confianza, listos para brindarle el apoyo que necesita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bitter.className} ${karma.className}`}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
