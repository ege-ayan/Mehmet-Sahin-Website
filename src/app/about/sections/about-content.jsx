import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaStethoscope,
  FaLanguage,
  FaUsers,
} from "react-icons/fa";

export default function AboutContent() {
  return (
    <main className="bg-gradient-to-r from-blue-600 to-blue-900 w-full flex px-5 pt-32 sm:pt-44 pb-20 flex-col items-center">
      <article className="container flex flex-col items-center justify-center lg:gap-12">
        <header className="text-white text-3xl lg:text-5xl font-bold text-center tracking-wide mb-10">
          <h1>HAKKIMDA</h1>
        </header>

        <section
          aria-labelledby="personal-info"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12"
        >
          <div className="flex flex-col w-full lg:w-2/3 justify-center text-white space-y-6 text-xl lg:text-2xl leading-relaxed">
            <h2 id="personal-info" className="sr-only">
              Kişisel Bilgiler
            </h2>
            <div className="flex items-center gap-3 text-3xl font-semibold">
              <FaUser className="text-yellow-300" aria-hidden="true" />
              <span>Kişisel Bilgiler</span>
            </div>
            <p className="pl-10">
              1976 Mersin doğumluyum. Evli ve bir çocuk babasıyım.
            </p>

            <div className="flex items-center gap-3 text-3xl font-semibold mt-8">
              <FaBriefcase className="text-green-300" aria-hidden="true" />
              <span>İş Tecrübesi</span>
            </div>
            <p className="pl-10">
              2003-2011 yılları arasında kamu hastanelerinde görev yaptım. 2011
              yılından beri özel sektördeyim. Halen Özel Koru Hastanesi
              (Çukurambar) bünyesindeki göz kliniğinde çalışmaktayım.
            </p>

            <div className="flex items-center gap-3 text-3xl font-semibold mt-8">
              <FaGraduationCap className="text-red-300" aria-hidden="true" />
              <span>Eğitim Bilgileri</span>
            </div>
            <p className="pl-10">
              1999 yılında Ankara Üniversitesi Tıp Fakültesi'nden mezun oldum.
              2003 yılında Ankara Eğitim ve Araştırma Hastanesi Göz Kliniği'nde
              ihtisasımı tamamladım.
            </p>
          </div>

          <figure className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/images/about.jpg"
              alt="Mehmet Şahin's Profile"
              quality={100}
              priority
              width={3000}
              height={4000}
              className="rounded-lg shadow-lg border-4 border-white"
            />
          </figure>
        </section>

        <section
          aria-labelledby="expertise"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-24 lg:mt-16"
        >
          <figure className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="/images/about-2.jpg"
              alt="Mehmet Şahin at work"
              quality={100}
              priority
              width={3000}
              height={4000}
              className="rounded-lg shadow-lg border-4 border-white"
            />
          </figure>

          <div className="flex flex-col w-full lg:w-2/3 justify-center text-white space-y-6 text-xl lg:text-2xl leading-relaxed">
            <h2 id="expertise" className="sr-only">
              Uzmanlık Alanı
            </h2>
            <div className="flex items-center gap-3 text-3xl font-semibold">
              <FaStethoscope className="text-purple-300" aria-hidden="true" />
              <span>Uzmanlık Alanı</span>
            </div>
            <p className="pl-10">
              Katarakt ve Diğer Ön Segment Cerrahileri, Refraktif Cerrahi,
              Retina Hastalıkları (30.000'den fazla vaka deneyimi)
            </p>

            <div className="flex items-center gap-3 text-3xl font-semibold mt-8">
              <FaLanguage className="text-blue-300" aria-hidden="true" />
              <span>Yabancı Dil Bilgisi</span>
            </div>
            <p className="pl-10">İngilizce</p>

            <div className="flex items-center gap-3 text-3xl font-semibold mt-8">
              <FaUsers className="text-pink-300" aria-hidden="true" />
              <span>Üyesi Olduğu Dernekler</span>
            </div>
            <ul
              className="pl-10 list-disc text-lg underline space-y-2"
              aria-label="Üyesi Olduğu Dernekler"
            >
              <li>
                <Link
                  href="https://www.todnet.org/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  Türk Oftalmoloji Derneği (TOD)
                </Link>
              </li>
              <li>
                <Link
                  href="https://tcod-tros.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  Türk Cumhuriyetleri Oftalmoloji Derneği (TCOD)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aao.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  American Academy of Ophthalmology (AAO)
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
