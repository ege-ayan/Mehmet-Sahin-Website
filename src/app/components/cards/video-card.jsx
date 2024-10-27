"use client";
import { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

export default function VideoCard({ title, videosrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full  p-6 bg-gradient-to-b from-blue-500 to-indigo-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <button
        onClick={openModal}
        className="flex items-center justify-center w-16 h-16 bg-blue-950 rounded-full shadow-lg hover:bg-black transition duration-300"
      >
        <FiPlay size={24} className="text-white" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0  w z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/5 aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300 transition duration-300"
              aria-label="Close video"
            >
              <FiX />
            </button>

            <video
              src={videosrc}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
