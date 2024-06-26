"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/im4.jpg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{ height: "100vh" }}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            objectPosition="top" // This centers the image
            quality={75} // Adjust quality to optimize loading
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
        <h1 className=" text-white text-6xl md:text-8xl  font-extrabold">
          MINISTÈRE LA GRACE PARLE
        </h1>
        <p className="text-gray-900 text-lg md:text-lg font-semibold">
          Rejoignez-nous pour un voyage spirituel inspirant. Rejoignez-nous pour
          un voyage spirituel inspirant. Rejoignez-nous pour un voyage spirituel
          inspirant.
        </p>
        <div className="flex space-x-4 font-bold">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            En savoir plus
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}
