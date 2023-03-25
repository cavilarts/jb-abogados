import { ImHammer2, ImBook, ImLibrary } from "react-icons/im";
import { MdFactory, MdFamilyRestroom } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";

export function Specialities() {
  return (
    <section className="relative py-12 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative px-6 py-10 overflow-hidden bg-white border-primary border-2 shadow-xl rounded-2xl sm:px-12 sm:py-20">
          <div className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
              data-v-79ccdc36=""
            >
              <path
                className="text-gray-100"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                data-v-79ccdc36=""
              ></path>
              <path
                className="text-gray-300"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                data-v-79ccdc36=""
              ></path>
            </svg>
          </div>
          <div className="relative">
            <div className="mt-6 sm:mt-12 sm:text-center">
              <h2 className="text-center text-3xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl md:leading-tight md:max-w-4xl md:mx-auto mb-10">
                Nuestras especialidades
              </h2>
              <div className="flex gap-4 flex-wrap content-center md:max-w-xl mx-auto text-center mb-40">
                <div className="flex flex-col flex-1 justify-start items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <ImHammer2 className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Penal</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <ImBook className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Civil</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <MdFamilyRestroom className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho de Familia</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <MdFactory className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Comercial</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <GiReceiveMoney className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Laboral</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <ImLibrary className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Publico</h3>
                </div>
                <div className="flex flex-col flex-1 items-center">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full border border-black mb-4">
                    <FaFileContract className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold">Derecho Notarial</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
