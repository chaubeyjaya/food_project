import About from "@/components/About/About";
import Browsemenu from "@/components/Browsemenu/Browsemenu";
import Footer from "@/components/Footer/Footer";
import Imagecard from "@/components/ImageCard/Imagecard";
import Main from "@/components/main/Main";
import Start from "@/components/Start/Start";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Start/>
  <Browsemenu/>
  <About/>
  <Main/>
  <Imagecard/>
  <Footer/>
  </>
  );
}
