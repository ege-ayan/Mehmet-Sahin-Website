import VideoCard from "@/app/components/cards/video-card";
import videos from "@/app/content/videos";
export default function VideoGallery() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="text-gray-900 text-3xl lg:text-5xl font-bold text-center">
          VİDEO GALERİSİ
        </div>
        <div className="relative w-full lg:w-2/3 aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Vl-s1JspmYc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Cards Section */}
      <section className="flex flex-wrap w-full gap-5 items-center justify-center">
        {videos.map((video, index) => (
          <div key={index} className="w-full lg:w-1/4 h-[200px]">
            <VideoCard title={video.title} videosrc={video.videosrc} />
          </div>
        ))}
      </section>
    </div>
  );
}
