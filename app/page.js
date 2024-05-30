import Image from "next/image";
import NavBar from "./component/Navbar";
import Hero from "./component/Heroe";
import CustomComponent from "./component/CustomComponent";
import Footer from "./component/Footer";
import ThemeScript from "./component/ThemeScript";

export default function Home() {
  return (
    <div>
      <NavBar />
      <br /> <br /> <br />
      <Hero />
      <CustomComponent />
      <ThemeScript />
      <Footer />
    </div>
  );
}
