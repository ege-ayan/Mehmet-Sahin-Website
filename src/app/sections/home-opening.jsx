import Image from "next/image";

export default function HomeOpening() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-900 w-full pt-44 py-32 flex items-center">
      <div className="container mx-auto flex gap-10 flex-col xl:flex-row items-center px-4">
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-start mb-4 xl:mb-0">
          <div className="rounded-xl shadow-xl overflow-hidden ">
            <Image
              src="/images/homepage-opening.jpg"
              alt="OP. DR. MEHMET ŞAHİN"
              width={4608}
              height={3072}
              quality={100}
              priority
              className="max-w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center xl:text-left text-white space-y-4">
          <h1 className="text-4xl xl:text-6xl font-extrabold leading-tight">
            <span className="border-b-4 border-blue-300 pb-2 inline-block">
              OP. DR. MEHMET ŞAHİN
            </span>
          </h1>
          <p className="text-2xl font-light tracking-wide text-blue-200">
            KATARAKT VE REFRAKTİF CERRAHİSİ (EXCIMER LASER)
          </p>
        </div>
      </div>
    </section>
  );
}
