import VideoGallery from "./sections/video-gallery";

export default function HomeOpening() {
  return (
    <section className="w-full py-32 flex justify-center items-center">
      <div className="flex flex-col container items-center justify-center">
        <VideoGallery />
      </div>
    </section>
  );
}
