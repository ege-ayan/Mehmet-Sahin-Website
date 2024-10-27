import ImageCard from "@/app/components/cards/image-card";

export default function PhotoGallery() {
  return (
    <div className="flex w-full flex-col gap-10 justify-center">
      <div className="text-gray-900 text-3xl lg:text-5xl font-bold text-center">
        FOTOĞRAF GALERİSİ
      </div>
      <div className=" flex w-full flex-wrap gap-10 items-center justify-center ">
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-1.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-2.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-3.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-4.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-5.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-6.jpg"} />
        </div>
        <div className="w-full lg:w-1/3">
          <ImageCard imagesrc={"/images/gallery/gallery-7.jpg"} />
        </div>
      </div>
    </div>
  );
}
