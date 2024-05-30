// Hero.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/im6.jpg", "/im1.jpg", "/im2.jpg", "/im7.jpg"];

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
            objectPosition="center" // This centers the image
            quality={75} // Adjust quality to optimize loading
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
