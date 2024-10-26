export default function HomeVideos() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-900 w-full py-16 flex flex-col items-center">
      <div className="container p-5 flex flex-col items-center justify-center gap-10">
        <div className="text-white text-3xl md:text-5xl font-bold text-center">
          VİDEOLAR
        </div>
        <div
          className="relative flex items-center w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Vl-s1JspmYc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
