import PhotoGallery from "./sections/photo-gallery";
import VideoGallery from "./sections/video-gallery";

export default function HomeOpening() {
  return (
    <section className="w-full pt-48 pb-20 flex justify-center items-center px-5">
      <div className="flex flex-col container gap-12 items-center justify-center">
        <VideoGallery />
        <PhotoGallery />
      </div>
    </section>
  );
}
