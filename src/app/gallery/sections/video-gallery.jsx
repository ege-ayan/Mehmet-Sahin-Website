import VideoCard from "@/app/components/cards/video-card";

export default function VideoGallery() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col items-center  justify-center">
        <div>VİDEO GALERİSİ</div>
        <div
          className="relative flex items-center w-2/3 h-0"
          style={{ paddingBottom: "40.25%" }}
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

      <section className="flex flex-wrap w-full gap-5 items-center justify-center">
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Yakın Görme Bozukluğu-Presbiyopi"}
            videosrc={"/videos/presbiyobi.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Uzağı ve Yakını Görememe (Miyopi, Hipermetropi)"}
            videosrc={"/videos/miyop.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Makula Dejenerasyonu-YBMD"}
            videosrc={"/videos/ybmd.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Lasik Göz Ameliyatı"}
            videosrc={"/videos/lastik-goz.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard title={"Katarakt"} videosrc={"/videos/katarakt.mp4"} />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Göz Tansiyonu (Glokom)"}
            videosrc={"/videos/glokom.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Glokom İlaçları"}
            videosrc={"/videos/glokom-med.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Astigmatizmde Gözlük Kullanmak"}
            videosrc={"/videos/astigmat-glasses.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard title={"Astigmatizm"} videosrc={"/videos/astigmat.mp4"} />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Göz Animasyon"}
            videosrc={"/videos/eye-animation.mp4"}
          />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard title={"Lasik Ameliyatı"} videosrc={"/videos/lasik.mp4"} />
        </div>
        <div className="w-full md:w-1/4 h-[200px]">
          <VideoCard
            title={"Göz İncelemesi"}
            videosrc={"/videos/eye-overview.mp4"}
          />
        </div>
      </section>
    </div>
  );
}
