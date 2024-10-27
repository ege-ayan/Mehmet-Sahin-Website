"use client";
import { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function ImageCard({ imagesrc, alt = "Image" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-full">
      <div
        className="relative w-full h-0 pb-[100%] cursor-pointer"
        onClick={openModal}
      >
        <Image
          src={imagesrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg transition-transform duration-300 sm:hover:scale-105"
        />
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          {/* Modal Content with 1:1 Aspect Ratio */}
          <div className="relative w-[90vw] h-[90vw] max-w-[90vh] max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300 transition duration-300"
              aria-label="Close image"
            >
              <FiX />
            </button>

            <Image
              src={imagesrc}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
