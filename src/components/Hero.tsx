import { BackgroundMesh } from "./BackgroundMesh";
import { EmailForm } from "./EmailForm";

export function Hero() {
  return (
    <section className="p-5">
      <div className="md:max-w-lg">
        <div>
          <h2 className="text-4xl font-bitter font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Servicios jurídicos de confianza.
          </h2>
          <p className="mt-6 text-lg text-gray-500 sm:text-xl">
            JBE Abogados ofrece asesoramiento jurídico profesional y fiable para
            que usted y su empresa prospere.{" "}
          </p>
        </div>
      </div>
      <div className="sm:mx-auto sm:px-6 relative mt-0">
        <div className="py-12 sm:relative sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block relative">
            <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
            <BackgroundMesh />
          </div>
          <div className="relative pl-4 -mr:20 sm:-mr-32 md:-mr-16 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12 xl:h-[500px]">
            <img
              className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none"
              src="/images/lawyer.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <EmailForm />
      <div className=" max-w-md">
        <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            "Por supuesto que la gente se esta haciendo inteligente; están
            dejando que sus abogados, en lugar de sus consciencias, sean sus
            guías."
            <br />
            <span> - Will Rogers</span>
          </p>
        </blockquote>
      </div>
    </section>
  );
}
