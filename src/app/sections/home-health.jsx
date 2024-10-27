import HealthCard from "../components/cards/health-card";
import Carousel from "../components/carousel";

export default function HomeHealth() {
  return (
    <section className="w-full py-5 sm:py-16 flex flex-col items-center">
      <div className="container p-5 flex flex-col items-center justify-center gap-10">
        <div className="text-black text-3xl md:text-5xl font-bold text-center">
          SAĞLIK KÖŞESİ
        </div>

        <Carousel />
      </div>
    </section>
  );
}
