import Banner from "@/components/home/Banner";
import Gallery from "@/components/home/Gallery";
import Hotels from "@/components/home/Hotels";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <section>
      <Banner />
      <Hotels />
      <Gallery />
      <Testimonials />
    </section>
  );
}
