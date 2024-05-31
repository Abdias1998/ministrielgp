"use client";
import Image from "next/image";

export default function CustomComponent() {
  return (
    <section className="relative p-4">
      <h1 className="md:text-6xl  text-yellow-500 mt-6 text-4xl text-center  font-bold mb-4">
        Le mot du prophète
      </h1>
      <hr className="bg-yellow-500 w-48 h-2 m-auto" />

      <div className="flex flex-col mt-6 md:flex-row md:space-x-4 mb-4">
        <p className="mb-4 text-gray-500 md:mb-0">
          Je vous souhaite la bienvenue sur le site officiel de La Grâce Parle.
          A travers les enseignements et les messages que nous diffusons, je
          désire que votre mentalité soit transformée, que votre vie soit
          révolutionnée, et que vous accomplissiez certainement votre destinée.
        </p>
        <p className="text-gray-500">
          Tout ce qui est déployé au travers de ce site concourt vivement à ce
          que vous deveniez meilleur dans la vie. Je crois que Dieu a un plan
          pour vous; et ce plan, il vous rend capable de l’accomplir. Il faut
          juste y croire.
        </p>
      </div>

      <div className="float right-0 mt-6 mr-4">
        <Image
          src="/im5c.jpg" // Remplacez par le chemin de votre image de profil
          alt="Profile Image"
          width={98}
          height={98}
          style={{ borderRadius: "100%" }}
          className="rounded border border-gray-300"
        />
      </div>
    </section>
  );
}
