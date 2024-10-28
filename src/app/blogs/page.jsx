import Carousel from "../components/carousel";

export default function Health() {
  return (
    <section className="w-full py-5 sm:py-40 flex flex-col items-center pt-32 sm:pt-48 px-5 pb-20">
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="text-black text-3xl md:text-5xl font-bold text-center">
          SAĞLIK KÖŞESİ
        </div>
        <Carousel />
      </div>
    </section>
  );
}
