import Banner from "@/app/components/home/Banner";
import Hotels from "@/app/components/home/Hotels";
import Gallery from "@/app/components/home/Gallery";
import Testimonials from "@/app/components/home/Testimonials";
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
