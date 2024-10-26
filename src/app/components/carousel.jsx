"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HealthCard from "./cards/health-card";

const cardsData = [
  {
    title: "Retina",
    imageUrl: "/images/health-retina.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Retina görme hücreleri ve damarlardan oluşan bir ağ tabakasıdır ve göz küresinin arka duvarını bir örtü gibi kaplar. Retina kendisine gelen ışığı...",
  },

  {
    title: "Diyabetik Retinopati",
    imageUrl: "/images/health-diabetic.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Gerek diyabetin kendisi gerekse diyabetik göz hastalıkları dünyada ve ülkemizde önemli bir sağlık problemidir. Diyabete bağlı körlükler önlenebilir...",
  },
  {
    title: "Retina Dekolmanı",
    imageUrl: "/images/health-retina-dekolman.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Retina Dekolmanı, retinada oluşan yırtık ve delikler neticesinde retina katmanlarının birbirinden ayrılması neticesinde oluşur. Sıklıkla orta yaş v...",
  },

  {
    title: "Sarı Nokta Hastalığı",
    imageUrl: "/images/health-yellow-spot.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Sarı nokta, gözde merkezi görmeden sorumlu alandır. Sarı nokta hastalığı, diğer adıyla makula dejenerasyonu, çok nadiren 50 yaşından önce görüleb...",
  },
  {
    title: "Amsler Grid Testi",
    imageUrl: "/images/health-amsler-grid.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Amsler Grid Testi, sarı nokta hastalığının erken teşhisinde ve takibinde kullanılan basit bir testtir. Sarı nokta hastalığı teşhisi almış veya ...",
  },

  {
    title: "Prematür Retinopatisi (ROP)",
    imageUrl: "/images/health-rop.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Prematür Retinopatisi (ROP) erken doğan bebeklerin gözlerinde görülen önemli bir sağlık sorunudur. Özellikle 32. haftadan önce ve 1500 gramın al...",
  },
  {
    title: "Göz Estetiği",
    imageUrl: "/images/health-eye-aesthatic.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Gözün bu bölümü ile ilgilenen branşı oküloplastidir. Göz kapağı, göz yaşı yolları ve göz çukuru ile ilgili hastalıklar tedavi alanlarıdır.Göz K...",
  },

  {
    title: "Katarakt Nedir?",
    imageUrl: "/images/health-katarakt.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Katarakt nedir? Nasıl tedavi edilir? Katarakt, göz bebeğinin arkasında bulunan ve görmeye yardımcı göz merceğinin saydamlığını kaybederek matlaşmasıdır…",
  },
  {
    title: "Göz Seyirmesi",
    imageUrl: "/images/health-eye-flinch.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Göz Seyirmesi konusunda bazı bilgiler: Göz seyirmesi göz kapaginin kendi kendine titreşmesi durumudur ve bu durum 'göz kırpma' dan farklı...",
  },

  {
    title: "Göz Hastalıkları",
    imageUrl: "/images/health-eye-diseases.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Göz hastalıkları ve tedavisi için yanlış bilinenler ve gerçekler Gözlük Kullanımı ile İlgili –Dinlendirici Gözlük : Böyle bir gözlük yoktur....",
  },
  {
    title: "Kuru Göz",
    imageUrl: "/images/health-dry-eye.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Kuru göz toplumda çok sık görülen tedavi edilebilir bir hastalıktır. Gözde yanma, batma, yabancı cisim hissi, kaşıntı, kızarıklık ve sulanma kuru g...",
  },

  {
    title: "Göz Muayenesi",
    imageUrl: "/images/health-eye-check.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Mutlaka kapsamlı bir göz muayenesi gereken durumlar nelerdir ? Herkesin belirli aralıklarla ayrıntılı bir göz muayenesi olması gereklidir. Ancak a...",
  },
  {
    title: "Excimer Laser",
    imageUrl: "/images/health-excimer-laser.jpg",
    href: "/article/katarakt-nedir",
    description:
      "Excimer laser, miyopi, hipermetropi ve astigmatizmanın tedavisinde kullanılan yöntemdir. Excimer lasere uygun olmayan gözlerde ise, göz içi çeşit...",
  },

  {
    title: "Keratokonus",
    imageUrl: "/images/health-keratokonus.jpg",
    href: "/article/katarakt-nedir",
    description:
      "KeratokonusKornea gözümüzün en ön tarafındaki saydam tabakadır ve gözün birinci optik tabakasıdır. Keratokonus, kornea tabakasının hem incelmesi he...",
  },
];

export default function Carousel() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <HealthCard
              title={card.title}
              imageUrl={card.imageUrl}
              href={card.href}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
