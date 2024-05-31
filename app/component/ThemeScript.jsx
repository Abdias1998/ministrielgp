import Image from "next/image";
import React from "react";

const ThemeScript = () => {
  return (
    <div className="bg-blue-500 flex justify-center items-start px-4  content-center flex-col md:flex-row ">
      <div className="">
        <h2 className="text-md md:text-lg text-yellow-500 uppercase p-2 font-bold">
          VISIONNER
        </h2>
        <div className="relative">
          <h2 className="text-4xl text-white font-bold p-2">
            LES DERNIERS MESSAGES
          </h2>
          <hr className="bg-pink-500 border-pink-700 rounded-sm w-20 h-1 absolute left-3" />
        </div>

        <div className=" flex justify-center items-start content-start flex-col  mt-12">
          <div className="flex space-x-2">
            <Image
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
              className="h-8 w-auto cursor-pointer"
              src="/icon-play-64.webp"
              alt="icon-play"
            />
            <div>
              <h4 className="text-white uppercase text-md md:text-lg font-bold hover:text-yellow-500 cursor-pointer">
                OINTS TEMOINS
              </h4>
              <p className="text-gray-700 text-sm font-light md:text-md  py-1">
                ORATEUR: PROPHETE SAMUEL DALUM
              </p>
            </div>
          </div>
          <div className="flex space-x-2 py-6 ">
            <Image
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
              className="h-8 w-auto cursor-pointer"
              src="/icon-play-64.webp"
              alt="icon-play"
            />
            <div>
              <h4 className="text-white uppercase text-md md:text-lg font-bold hover:text-yellow-500 cursor-pointer">
                JESUS LA VERITE
              </h4>
              <p className="text-gray-700 text-sm font-light md:text-md  py-1">
                ORATEUR: PROPHETE SAMUEL DALUM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-md md:text-lg text-yellow-500 uppercase p-2 font-bold">
          LIRE
        </h2>
        <div className="relative">
          <h2 className="text-4xl text-white font-bold p-2">
            LES DERNIÈRES ACTUALITÉS
          </h2>
          <hr className="bg-pink-500 border-pink-700 rounded-sm w-20 h-1 absolute left-3" />
        </div>

        <div className=" flex justify-center items-start content-start flex-col  mt-12">
          <div className="flex space-x-2">
            <Image
              width={80}
              height={80}
              //   style={{ borderRadius: "50%" }}
              className="h-8 w-auto cursor-pointer"
              src="/book_text-64.webp"
              alt="icon-play"
            />
            <div>
              <h4 className="text-white uppercase text-md md:text-lg font-bold hover:text-yellow-500 cursor-pointer">
                LE JEUNE DES JEUNES
              </h4>
              <p className="text-gray-700 text-sm font-light md:text-md  py-1">
                Prenez le rendez-vous ce ................
              </p>
            </div>
          </div>
          <div className="flex space-x-2 py-6">
            <Image
              width={80}
              height={80}
              //   style={{ borderRadius: "50%" }}
              className="h-8 w-auto cursor-pointer"
              src="/book_text-64.webp"
              alt="icon-play"
            />
            <div>
              <h4 className="text-white uppercase text-md md:text-lg font-bold hover:text-yellow-500 cursor-pointer">
                BRIGARDE DE PRIERE
              </h4>
              <p className="text-gray-700 text-sm font-light md:text-md  py-1">
                3 jours de prière ce ................................
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeScript;
