"use client";
import React from "react";

export default function Map() {
  const mapSrc = `https://www.google.com/maps?ll=39.901401,32.812498&z=16&t=m&hl=tr&gl=US&mapclient=embed&q=1450.+Sk.+No:13+%C3%87ukurambar+06510+%C3%87ankaya/Ankara&output=embed`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        allowFullScreen
        aria-hidden="false"
        title="Google Maps - Specified Location"
      ></iframe>
    </div>
  );
}
