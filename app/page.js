import Image from "next/image";
import NavBar from "./component/Navbar";
import Hero from "./component/Heroe";

export default function Home() {
  return (
    <div>
      <NavBar />
      <br /> <br /> <br />
      <Hero />
    </div>
  );
}
