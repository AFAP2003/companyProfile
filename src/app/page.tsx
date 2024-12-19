import {Banner} from "./components/banner";
import About from "./components/about";
import Product from "./components/product";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
   <div>
    <Banner/>
    <About/>
    <Product/>
    <Testimonials/>
   </div>
  );
}
