import { BsTelephoneFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillClockCircle,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";

import { BackgroundMesh } from "./BackgroundMesh";
import { EmailForm } from "./EmailForm";

export function Hero() {
  return (
    <section className="p-5">
      <div className="flex justify-between items-center flex-wrap gap-8">
        <div className="w-full md:max-w-lg">
          <h2 className="text-4xl font-bitter font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Servicios jurídicos de confianza.
          </h2>
          <p className="mt-6 text-lg text-gray-500 sm:text-xl">
            JBE Abogados ofrece asesoramiento jurídico profesional y fiable para
            que usted y su empresa prospere.{" "}
          </p>
        </div>
        <div className="w-full md:max-w-fit sm:mt-8 bg-black p-6 rounded-lg md:max-h-72">
          <p className="text-white text-xl">
            Llamenos para recibir una consulta gratuita:
            <a className="flex items-center mt-5" href="tel:+573224454241">
              <BsTelephoneFill className="mr-4" />
              <span>322 445 4241</span>
            </a>
            <div className="flex align-middle mt-4">
              <AiFillClockCircle className="mr-4" />
              <span>Lun- Vi: 9:00am - 06.00pm</span>
            </div>
          </p>
          <p className="text-white text-xl mt-8">
            O busquenos en nuestras redes sociales:
          </p>
          <div className="text-white text-xl flex align-middle justify-evenly">
            <a href="https://www.facebook.com/" target="_blank">
              <AiFillFacebook className=" text-5xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <AiFillInstagram className=" text-5xl" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <AiFillLinkedin className=" text-5xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:px-6 relative mt-0">
        <div className="py-12 sm:relative sm:py-16 lg:absolute lg:right-0 lg:w-1/2">
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
