import Image from "next/image";
import React from "react";

const ThemeScript = () => {
  return (
    <div className="bg-blue-500 flex justify-center items-center content-center flex-col md:flex-row ">
      <div className="">
        <h2 className="text-md text-yellow-500 uppercase p-4 font-bold">
          VISIONNER
        </h2>
        <h2 className="text-4xl text-white font-bold p-4">
          LES DERNIERS MESSAGES
        </h2>
        <hr className="bg-pink-500 border-pink-700 rounded-sm w-20 h-1 absolute left-5" />
        <div className="space-x-6 flex justify-center items-center content-center flex-col md:flex-row mt-4">
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
                Heure de JERICHO
              </h4>
              <h6 className="text-gray-700 text-sm md:text-md font-medium py-1">
                ORATEUR: PROPHETE SAMUEL DALUM
              </h6>
            </div>
          </div>

          <div>
            <Image
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
              className="h-8 w-auto"
              src="/logo.jpg"
              alt=""
            />
            <div>
              <h4>Heure de JERICHO</h4>
              <h6>ORATEUR: PROPHETE SAMUEL DALUM</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-md text-yellow-500 uppercase p-4 font-bold">
          LIRE
        </h2>
        <h2 className="text-4xl text-white font-bold p-4">
          LES DERNIÈRES ACTUALITÉS
        </h2>
        <hr className="bg-pink-500 border-pink-700 rounded-sm w-20 h-1 absolute left-5" />
        <div className="space-x-6 flex justify-center items-center content-center flex-col md:flex-row mt-4">
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
                Heure de JERICHO
              </h4>
              <h6 className="text-gray-700 text-sm md:text-md font-medium py-1">
                ORATEUR: PROPHETE SAMUEL DALUM
              </h6>
            </div>
          </div>

          <div>
            <Image
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
              className="h-8 w-auto"
              src="/logo.jpg"
              alt=""
            />
            <div>
              <h4>Heure de JERICHO</h4>
              <h6>ORATEUR: PROPHETE SAMUEL DALUM</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeScript;
