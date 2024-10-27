import Link from "next/link";

export default function HomeVideos() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-900 w-full py-5 sm:py-16 flex flex-col items-center">
      <div className="container p-5 flex flex-col items-center justify-center gap-10">
        <div className="text-white text-3xl md:text-5xl font-bold text-center">
          MEDYA
        </div>

        {/* Video Wrapper */}
        <div className="relative w-full lg:w-2/3 aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Vl-s1JspmYc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Hyperlink */}

        <Link
          href="/gallery"
          className="bg-white text-black sm:text-xl font-semibold px-6 py-3 rounded-full transition-transform transform hover:scale-105"
        >
          DAHA FAZLA
        </Link>
      </div>
    </section>
  );
}
