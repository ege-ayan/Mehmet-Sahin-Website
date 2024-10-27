import React from "react";
import ImageCard from "@/app/components/cards/image-card";
import imageData from "@/app/content/images";

export default function PhotoGallery() {
  return (
    <div className="flex w-full flex-col gap-10 justify-center">
      <div className="text-gray-900 text-3xl lg:text-5xl font-bold text-center">
        FOTOĞRAF GALERİSİ
      </div>
      <div className="flex w-full flex-wrap gap-10 items-center justify-center">
        {imageData.map((image, index) => (
          <div key={index} className="w-full lg:w-1/3">
            <ImageCard imagesrc={image.imagesrc} />
          </div>
        ))}
      </div>
    </div>
  );
}
