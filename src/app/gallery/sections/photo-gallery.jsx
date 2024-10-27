import ImageCard from "@/app/components/cards/image-card";

export default function PhotoGallery() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-gray-900 text-3xl md:text-5xl font-bold text-center">
          FOTOĞRAF GALERİSİ
        </div>
        <div className=" flex w-full flex-wrap items-center justify-center ">
          <div className="w-full sm:max-w-[500px] h-[400px]">
            <ImageCard imagesrc={"/images/gallery/gallery-1.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
}
